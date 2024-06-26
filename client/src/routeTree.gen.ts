/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AuthenticatedImport } from './routes/_authenticated'

// Create Virtual Routes

const AuthenticatedIndexLazyImport = createFileRoute('/_authenticated/')()
const AuthenticatedProfileLazyImport = createFileRoute(
  '/_authenticated/profile',
)()
const AuthenticatedExpensesLazyImport = createFileRoute(
  '/_authenticated/expenses',
)()
const AuthenticatedCreateExpenseLazyImport = createFileRoute(
  '/_authenticated/create-expense',
)()

// Create/Update Routes

const AuthenticatedRoute = AuthenticatedImport.update({
  id: '/_authenticated',
  getParentRoute: () => rootRoute,
} as any)

const AuthenticatedIndexLazyRoute = AuthenticatedIndexLazyImport.update({
  path: '/',
  getParentRoute: () => AuthenticatedRoute,
} as any).lazy(() =>
  import('./routes/_authenticated/index.lazy').then((d) => d.Route),
)

const AuthenticatedProfileLazyRoute = AuthenticatedProfileLazyImport.update({
  path: '/profile',
  getParentRoute: () => AuthenticatedRoute,
} as any).lazy(() =>
  import('./routes/_authenticated/profile.lazy').then((d) => d.Route),
)

const AuthenticatedExpensesLazyRoute = AuthenticatedExpensesLazyImport.update({
  path: '/expenses',
  getParentRoute: () => AuthenticatedRoute,
} as any).lazy(() =>
  import('./routes/_authenticated/expenses.lazy').then((d) => d.Route),
)

const AuthenticatedCreateExpenseLazyRoute =
  AuthenticatedCreateExpenseLazyImport.update({
    path: '/create-expense',
    getParentRoute: () => AuthenticatedRoute,
  } as any).lazy(() =>
    import('./routes/_authenticated/create-expense.lazy').then((d) => d.Route),
  )

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_authenticated': {
      preLoaderRoute: typeof AuthenticatedImport
      parentRoute: typeof rootRoute
    }
    '/_authenticated/create-expense': {
      preLoaderRoute: typeof AuthenticatedCreateExpenseLazyImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/expenses': {
      preLoaderRoute: typeof AuthenticatedExpensesLazyImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/profile': {
      preLoaderRoute: typeof AuthenticatedProfileLazyImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/': {
      preLoaderRoute: typeof AuthenticatedIndexLazyImport
      parentRoute: typeof AuthenticatedImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  AuthenticatedRoute.addChildren([
    AuthenticatedCreateExpenseLazyRoute,
    AuthenticatedExpensesLazyRoute,
    AuthenticatedProfileLazyRoute,
    AuthenticatedIndexLazyRoute,
  ]),
])

/* prettier-ignore-end */
