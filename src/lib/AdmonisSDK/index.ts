// admonis-sdk.ts

// import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

import type { CreateOrderRes } from '@/lib/AdmonisSDK/sample'

type TMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

interface AdmonisConfig {
  username: string
  password: string
  apiKey: string
  baseURL: string
  // Other configuration options
}

/*class AdmonisSDK {
  private axiosInstance: AxiosInstance

  constructor(private config: AdmonisConfig) {
    this.axiosInstance = axios.create({
      baseURL: config.baseURL,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${config.apiKey}`
        // Other headers if needed
      }
    })
  }

  private async makeRequest<T>(
    method: TMethod,
    endpoint: string,
    data?: any
  ): Promise<T> {
    const options: AxiosRequestConfig = {
      method,
      url: endpoint,
      data
    }

    try {
      const response: AxiosResponse<T> = await this.axiosInstance(options)
      return response.data
    } catch (error) {
      // Handle errors
      throw new Error(`Admonis API Error: ${error.message}`)
    }
  }

  // Example method to fetch orders
  async getOrders(): Promise<Order[]> {
    try {
      const orders: Order[] = await this.makeRequest<Order[]>('GET', '/orders')
      return orders
    } catch (error) {
      throw new Error(`Failed to fetch orders: ${error.message}`)
    }
  }

  // Other methods to interact with Admonis API can be added here
}*/

export interface Product {
  // Define order properties based on Admonis API response
}

export interface Order {
  // Define order properties based on Admonis API response
}
class AdmonisSDK {
  private readonly baseUrl: string
  private readonly apiKey: string
  private readonly username: string
  private readonly password: string

  constructor(config: AdmonisConfig) {
    this.baseUrl = config.baseURL
    this.apiKey = config.apiKey
    this.username = config.username
    this.password = config.password
  }

  private async makeRequest<T>(method: TMethod, endpoint: string, data?: any): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`
    const headers = { 'Content-Type': 'application/json', Authorization: `Bearer ${this.apiKey}` }

    const body = data ? JSON.stringify(data) : undefined
    const options: RequestInit = { method, headers, body }

    const response = await fetch(url, options)

    if (!response?.ok) {
      throw new Error(`Admonis API Error: ${response.statusText}`)
    }

    return await response.json()
  }

  // product
  async createProducts(products: Product[]): Promise<Product[]> {
    return this.makeRequest<Product[]>('POST', '/products', products)
  }

  async getProducts(): Promise<Product[]> {
    return this.makeRequest<Product[]>(
      'GET',
      '/PlatformReturnXML.aspx?platformID=5C3FD784-59C1-4AD0-A66A-713C5A3B7956&CustomerID=DF256C77-F709-4C88-8DD1-99DBA9E8DF82'
    )
  }

  async updateProduct(id: string, product: Product): Promise<Product> {
    return this.makeRequest<Product>('PUT', `/products/${id}`, product)
  }

  // order
  async createOrders(orders: Order[]): Promise<CreateOrderRes[]> {
    const data = { username: this.username, password: this.password, orders }
    const res = await this.makeRequest<Order[]>('POST', '/PushPlatformsOrders', data)

    return res as unknown as CreateOrderRes[]
  }

  async getOrders(): Promise<Order[]> {
    return this.makeRequest<Order[]>('GET', '/orders')
  }

  async updateOrder(id: string, order: Order): Promise<Order> {
    return this.makeRequest<Order>('PUT', `/orders/${id}`, order)
  }
}

// Usage example
const admonisConfig: AdmonisConfig = {
  username: 'username',
  password: 'password',
  apiKey: 'YOUR_API_KEY',
  // baseURL: 'https://api.admonis.com/v1'
  // baseURL: 'https://app.admonis.com/',
  baseURL: 'https://wsdemo.admonis.com/api/'
}

const admonisClient = new AdmonisSDK(admonisConfig)

admonisClient
  .getOrders()
  .then((orders) => {
    console.log('Fetched orders:', orders)
  })
  .catch((error) => {
    console.error('Error fetching orders:', error)
  })
