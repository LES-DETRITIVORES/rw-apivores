import express, { IRouterMatcher } from 'express'

export function Controller(path: string) {
  return function (target: any) {
    target.prototype.path = path
  }
}
export function expressRouter() {
  return function (target: any) {
    target.prototype.router = express.Router()
  }
}
type Method = 'get' | 'post' | 'put' | 'delete' | 'patch' | 'options' | 'head'
export function Route(method: Method, path: string) {
  return function (target: any, key: string) {
    target.prototype.router[method](path, target[key])
  }
}
export function Get(path: string) {
  return function (
    target: express.Router,
    key: string,
    descriptor: PropertyDescriptor
  ): void {
    // @ts-ignore
    target.route.get(path, target[key], descriptor)
  }
}
export function Post(path: string) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    target.router.post(path, target[key], descriptor)
  }
}
export function Put(path: string) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    target.router.put(path, target[key], descriptor)
  }
}
