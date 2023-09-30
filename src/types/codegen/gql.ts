/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core"

import * as types from "./graphql"

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  "query PagesSlug {\n  allPages {\n    slug\n  }\n}\n\nquery Page($slug: String!) {\n  page(filter: {slug: {eq: $slug}}) {\n    title\n    slug\n    content {\n      value\n      blocks {\n        __typename\n        ... on HeroProfileRecord {\n          id\n          welcome\n          fullname\n          tagline\n          shortBio {\n            value\n          }\n          socialLinks {\n            key\n            url\n            displayName\n          }\n        }\n        ... on HeroImageRecord {\n          id\n          image {\n            responsiveImage(imgixParams: {auto: format}) {\n              srcSet\n              webpSrcSet\n              sizes\n              src\n              width\n              height\n              aspectRatio\n              alt\n              title\n              base64\n            }\n          }\n        }\n      }\n    }\n  }\n  common {\n    ... on CommonRecord {\n      logo {\n        url\n      }\n      cvFile {\n        url\n      }\n    }\n  }\n  allPages {\n    slug\n    title\n    hidden\n  }\n}":
    types.PagesSlugDocument
}

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query PagesSlug {\n  allPages {\n    slug\n  }\n}\n\nquery Page($slug: String!) {\n  page(filter: {slug: {eq: $slug}}) {\n    title\n    slug\n    content {\n      value\n      blocks {\n        __typename\n        ... on HeroProfileRecord {\n          id\n          welcome\n          fullname\n          tagline\n          shortBio {\n            value\n          }\n          socialLinks {\n            key\n            url\n            displayName\n          }\n        }\n        ... on HeroImageRecord {\n          id\n          image {\n            responsiveImage(imgixParams: {auto: format}) {\n              srcSet\n              webpSrcSet\n              sizes\n              src\n              width\n              height\n              aspectRatio\n              alt\n              title\n              base64\n            }\n          }\n        }\n      }\n    }\n  }\n  common {\n    ... on CommonRecord {\n      logo {\n        url\n      }\n      cvFile {\n        url\n      }\n    }\n  }\n  allPages {\n    slug\n    title\n    hidden\n  }\n}"
): (typeof documents)["query PagesSlug {\n  allPages {\n    slug\n  }\n}\n\nquery Page($slug: String!) {\n  page(filter: {slug: {eq: $slug}}) {\n    title\n    slug\n    content {\n      value\n      blocks {\n        __typename\n        ... on HeroProfileRecord {\n          id\n          welcome\n          fullname\n          tagline\n          shortBio {\n            value\n          }\n          socialLinks {\n            key\n            url\n            displayName\n          }\n        }\n        ... on HeroImageRecord {\n          id\n          image {\n            responsiveImage(imgixParams: {auto: format}) {\n              srcSet\n              webpSrcSet\n              sizes\n              src\n              width\n              height\n              aspectRatio\n              alt\n              title\n              base64\n            }\n          }\n        }\n      }\n    }\n  }\n  common {\n    ... on CommonRecord {\n      logo {\n        url\n      }\n      cvFile {\n        url\n      }\n    }\n  }\n  allPages {\n    slug\n    title\n    hidden\n  }\n}"]

export function graphql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never