
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Website
 * 
 */
export type Website = $Result.DefaultSelection<Prisma.$WebsitePayload>
/**
 * Model Validators
 * 
 */
export type Validators = $Result.DefaultSelection<Prisma.$ValidatorsPayload>
/**
 * Model WebsiteTicks
 * 
 */
export type WebsiteTicks = $Result.DefaultSelection<Prisma.$WebsiteTicksPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const WebsiteStatus: {
  UP: 'UP',
  DOWN: 'DOWN'
};

export type WebsiteStatus = (typeof WebsiteStatus)[keyof typeof WebsiteStatus]

}

export type WebsiteStatus = $Enums.WebsiteStatus

export const WebsiteStatus: typeof $Enums.WebsiteStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.website`: Exposes CRUD operations for the **Website** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Websites
    * const websites = await prisma.website.findMany()
    * ```
    */
  get website(): Prisma.WebsiteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.validators`: Exposes CRUD operations for the **Validators** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Validators
    * const validators = await prisma.validators.findMany()
    * ```
    */
  get validators(): Prisma.ValidatorsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.websiteTicks`: Exposes CRUD operations for the **WebsiteTicks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WebsiteTicks
    * const websiteTicks = await prisma.websiteTicks.findMany()
    * ```
    */
  get websiteTicks(): Prisma.WebsiteTicksDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Website: 'Website',
    Validators: 'Validators',
    WebsiteTicks: 'WebsiteTicks'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "website" | "validators" | "websiteTicks"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Website: {
        payload: Prisma.$WebsitePayload<ExtArgs>
        fields: Prisma.WebsiteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WebsiteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WebsiteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload>
          }
          findFirst: {
            args: Prisma.WebsiteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WebsiteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload>
          }
          findMany: {
            args: Prisma.WebsiteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload>[]
          }
          create: {
            args: Prisma.WebsiteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload>
          }
          createMany: {
            args: Prisma.WebsiteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WebsiteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload>[]
          }
          delete: {
            args: Prisma.WebsiteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload>
          }
          update: {
            args: Prisma.WebsiteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload>
          }
          deleteMany: {
            args: Prisma.WebsiteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WebsiteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WebsiteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload>[]
          }
          upsert: {
            args: Prisma.WebsiteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload>
          }
          aggregate: {
            args: Prisma.WebsiteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWebsite>
          }
          groupBy: {
            args: Prisma.WebsiteGroupByArgs<ExtArgs>
            result: $Utils.Optional<WebsiteGroupByOutputType>[]
          }
          count: {
            args: Prisma.WebsiteCountArgs<ExtArgs>
            result: $Utils.Optional<WebsiteCountAggregateOutputType> | number
          }
        }
      }
      Validators: {
        payload: Prisma.$ValidatorsPayload<ExtArgs>
        fields: Prisma.ValidatorsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ValidatorsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValidatorsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ValidatorsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValidatorsPayload>
          }
          findFirst: {
            args: Prisma.ValidatorsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValidatorsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ValidatorsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValidatorsPayload>
          }
          findMany: {
            args: Prisma.ValidatorsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValidatorsPayload>[]
          }
          create: {
            args: Prisma.ValidatorsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValidatorsPayload>
          }
          createMany: {
            args: Prisma.ValidatorsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ValidatorsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValidatorsPayload>[]
          }
          delete: {
            args: Prisma.ValidatorsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValidatorsPayload>
          }
          update: {
            args: Prisma.ValidatorsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValidatorsPayload>
          }
          deleteMany: {
            args: Prisma.ValidatorsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ValidatorsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ValidatorsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValidatorsPayload>[]
          }
          upsert: {
            args: Prisma.ValidatorsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValidatorsPayload>
          }
          aggregate: {
            args: Prisma.ValidatorsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateValidators>
          }
          groupBy: {
            args: Prisma.ValidatorsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ValidatorsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ValidatorsCountArgs<ExtArgs>
            result: $Utils.Optional<ValidatorsCountAggregateOutputType> | number
          }
        }
      }
      WebsiteTicks: {
        payload: Prisma.$WebsiteTicksPayload<ExtArgs>
        fields: Prisma.WebsiteTicksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WebsiteTicksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsiteTicksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WebsiteTicksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsiteTicksPayload>
          }
          findFirst: {
            args: Prisma.WebsiteTicksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsiteTicksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WebsiteTicksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsiteTicksPayload>
          }
          findMany: {
            args: Prisma.WebsiteTicksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsiteTicksPayload>[]
          }
          create: {
            args: Prisma.WebsiteTicksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsiteTicksPayload>
          }
          createMany: {
            args: Prisma.WebsiteTicksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WebsiteTicksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsiteTicksPayload>[]
          }
          delete: {
            args: Prisma.WebsiteTicksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsiteTicksPayload>
          }
          update: {
            args: Prisma.WebsiteTicksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsiteTicksPayload>
          }
          deleteMany: {
            args: Prisma.WebsiteTicksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WebsiteTicksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WebsiteTicksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsiteTicksPayload>[]
          }
          upsert: {
            args: Prisma.WebsiteTicksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsiteTicksPayload>
          }
          aggregate: {
            args: Prisma.WebsiteTicksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWebsiteTicks>
          }
          groupBy: {
            args: Prisma.WebsiteTicksGroupByArgs<ExtArgs>
            result: $Utils.Optional<WebsiteTicksGroupByOutputType>[]
          }
          count: {
            args: Prisma.WebsiteTicksCountArgs<ExtArgs>
            result: $Utils.Optional<WebsiteTicksCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    website?: WebsiteOmit
    validators?: ValidatorsOmit
    websiteTicks?: WebsiteTicksOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type WebsiteCountOutputType
   */

  export type WebsiteCountOutputType = {
    WebsiteTicks: number
  }

  export type WebsiteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    WebsiteTicks?: boolean | WebsiteCountOutputTypeCountWebsiteTicksArgs
  }

  // Custom InputTypes
  /**
   * WebsiteCountOutputType without action
   */
  export type WebsiteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteCountOutputType
     */
    select?: WebsiteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WebsiteCountOutputType without action
   */
  export type WebsiteCountOutputTypeCountWebsiteTicksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebsiteTicksWhereInput
  }


  /**
   * Count Type ValidatorsCountOutputType
   */

  export type ValidatorsCountOutputType = {
    ticks: number
  }

  export type ValidatorsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticks?: boolean | ValidatorsCountOutputTypeCountTicksArgs
  }

  // Custom InputTypes
  /**
   * ValidatorsCountOutputType without action
   */
  export type ValidatorsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValidatorsCountOutputType
     */
    select?: ValidatorsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ValidatorsCountOutputType without action
   */
  export type ValidatorsCountOutputTypeCountTicksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebsiteTicksWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Website
   */

  export type AggregateWebsite = {
    _count: WebsiteCountAggregateOutputType | null
    _avg: WebsiteAvgAggregateOutputType | null
    _sum: WebsiteSumAggregateOutputType | null
    _min: WebsiteMinAggregateOutputType | null
    _max: WebsiteMaxAggregateOutputType | null
  }

  export type WebsiteAvgAggregateOutputType = {
    ticks: number | null
  }

  export type WebsiteSumAggregateOutputType = {
    ticks: number | null
  }

  export type WebsiteMinAggregateOutputType = {
    id: string | null
    url: string | null
    userId: string | null
    ticks: number | null
    disabled: boolean | null
  }

  export type WebsiteMaxAggregateOutputType = {
    id: string | null
    url: string | null
    userId: string | null
    ticks: number | null
    disabled: boolean | null
  }

  export type WebsiteCountAggregateOutputType = {
    id: number
    url: number
    userId: number
    ticks: number
    disabled: number
    _all: number
  }


  export type WebsiteAvgAggregateInputType = {
    ticks?: true
  }

  export type WebsiteSumAggregateInputType = {
    ticks?: true
  }

  export type WebsiteMinAggregateInputType = {
    id?: true
    url?: true
    userId?: true
    ticks?: true
    disabled?: true
  }

  export type WebsiteMaxAggregateInputType = {
    id?: true
    url?: true
    userId?: true
    ticks?: true
    disabled?: true
  }

  export type WebsiteCountAggregateInputType = {
    id?: true
    url?: true
    userId?: true
    ticks?: true
    disabled?: true
    _all?: true
  }

  export type WebsiteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Website to aggregate.
     */
    where?: WebsiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Websites to fetch.
     */
    orderBy?: WebsiteOrderByWithRelationInput | WebsiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WebsiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Websites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Websites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Websites
    **/
    _count?: true | WebsiteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WebsiteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WebsiteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WebsiteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WebsiteMaxAggregateInputType
  }

  export type GetWebsiteAggregateType<T extends WebsiteAggregateArgs> = {
        [P in keyof T & keyof AggregateWebsite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWebsite[P]>
      : GetScalarType<T[P], AggregateWebsite[P]>
  }




  export type WebsiteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebsiteWhereInput
    orderBy?: WebsiteOrderByWithAggregationInput | WebsiteOrderByWithAggregationInput[]
    by: WebsiteScalarFieldEnum[] | WebsiteScalarFieldEnum
    having?: WebsiteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WebsiteCountAggregateInputType | true
    _avg?: WebsiteAvgAggregateInputType
    _sum?: WebsiteSumAggregateInputType
    _min?: WebsiteMinAggregateInputType
    _max?: WebsiteMaxAggregateInputType
  }

  export type WebsiteGroupByOutputType = {
    id: string
    url: string
    userId: string
    ticks: number
    disabled: boolean
    _count: WebsiteCountAggregateOutputType | null
    _avg: WebsiteAvgAggregateOutputType | null
    _sum: WebsiteSumAggregateOutputType | null
    _min: WebsiteMinAggregateOutputType | null
    _max: WebsiteMaxAggregateOutputType | null
  }

  type GetWebsiteGroupByPayload<T extends WebsiteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WebsiteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WebsiteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WebsiteGroupByOutputType[P]>
            : GetScalarType<T[P], WebsiteGroupByOutputType[P]>
        }
      >
    >


  export type WebsiteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    userId?: boolean
    ticks?: boolean
    disabled?: boolean
    WebsiteTicks?: boolean | Website$WebsiteTicksArgs<ExtArgs>
    _count?: boolean | WebsiteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["website"]>

  export type WebsiteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    userId?: boolean
    ticks?: boolean
    disabled?: boolean
  }, ExtArgs["result"]["website"]>

  export type WebsiteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    userId?: boolean
    ticks?: boolean
    disabled?: boolean
  }, ExtArgs["result"]["website"]>

  export type WebsiteSelectScalar = {
    id?: boolean
    url?: boolean
    userId?: boolean
    ticks?: boolean
    disabled?: boolean
  }

  export type WebsiteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "userId" | "ticks" | "disabled", ExtArgs["result"]["website"]>
  export type WebsiteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    WebsiteTicks?: boolean | Website$WebsiteTicksArgs<ExtArgs>
    _count?: boolean | WebsiteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WebsiteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WebsiteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WebsitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Website"
    objects: {
      WebsiteTicks: Prisma.$WebsiteTicksPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      userId: string
      ticks: number
      disabled: boolean
    }, ExtArgs["result"]["website"]>
    composites: {}
  }

  type WebsiteGetPayload<S extends boolean | null | undefined | WebsiteDefaultArgs> = $Result.GetResult<Prisma.$WebsitePayload, S>

  type WebsiteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WebsiteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WebsiteCountAggregateInputType | true
    }

  export interface WebsiteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Website'], meta: { name: 'Website' } }
    /**
     * Find zero or one Website that matches the filter.
     * @param {WebsiteFindUniqueArgs} args - Arguments to find a Website
     * @example
     * // Get one Website
     * const website = await prisma.website.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WebsiteFindUniqueArgs>(args: SelectSubset<T, WebsiteFindUniqueArgs<ExtArgs>>): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Website that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WebsiteFindUniqueOrThrowArgs} args - Arguments to find a Website
     * @example
     * // Get one Website
     * const website = await prisma.website.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WebsiteFindUniqueOrThrowArgs>(args: SelectSubset<T, WebsiteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Website that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteFindFirstArgs} args - Arguments to find a Website
     * @example
     * // Get one Website
     * const website = await prisma.website.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WebsiteFindFirstArgs>(args?: SelectSubset<T, WebsiteFindFirstArgs<ExtArgs>>): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Website that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteFindFirstOrThrowArgs} args - Arguments to find a Website
     * @example
     * // Get one Website
     * const website = await prisma.website.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WebsiteFindFirstOrThrowArgs>(args?: SelectSubset<T, WebsiteFindFirstOrThrowArgs<ExtArgs>>): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Websites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Websites
     * const websites = await prisma.website.findMany()
     * 
     * // Get first 10 Websites
     * const websites = await prisma.website.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const websiteWithIdOnly = await prisma.website.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WebsiteFindManyArgs>(args?: SelectSubset<T, WebsiteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Website.
     * @param {WebsiteCreateArgs} args - Arguments to create a Website.
     * @example
     * // Create one Website
     * const Website = await prisma.website.create({
     *   data: {
     *     // ... data to create a Website
     *   }
     * })
     * 
     */
    create<T extends WebsiteCreateArgs>(args: SelectSubset<T, WebsiteCreateArgs<ExtArgs>>): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Websites.
     * @param {WebsiteCreateManyArgs} args - Arguments to create many Websites.
     * @example
     * // Create many Websites
     * const website = await prisma.website.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WebsiteCreateManyArgs>(args?: SelectSubset<T, WebsiteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Websites and returns the data saved in the database.
     * @param {WebsiteCreateManyAndReturnArgs} args - Arguments to create many Websites.
     * @example
     * // Create many Websites
     * const website = await prisma.website.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Websites and only return the `id`
     * const websiteWithIdOnly = await prisma.website.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WebsiteCreateManyAndReturnArgs>(args?: SelectSubset<T, WebsiteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Website.
     * @param {WebsiteDeleteArgs} args - Arguments to delete one Website.
     * @example
     * // Delete one Website
     * const Website = await prisma.website.delete({
     *   where: {
     *     // ... filter to delete one Website
     *   }
     * })
     * 
     */
    delete<T extends WebsiteDeleteArgs>(args: SelectSubset<T, WebsiteDeleteArgs<ExtArgs>>): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Website.
     * @param {WebsiteUpdateArgs} args - Arguments to update one Website.
     * @example
     * // Update one Website
     * const website = await prisma.website.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WebsiteUpdateArgs>(args: SelectSubset<T, WebsiteUpdateArgs<ExtArgs>>): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Websites.
     * @param {WebsiteDeleteManyArgs} args - Arguments to filter Websites to delete.
     * @example
     * // Delete a few Websites
     * const { count } = await prisma.website.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WebsiteDeleteManyArgs>(args?: SelectSubset<T, WebsiteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Websites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Websites
     * const website = await prisma.website.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WebsiteUpdateManyArgs>(args: SelectSubset<T, WebsiteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Websites and returns the data updated in the database.
     * @param {WebsiteUpdateManyAndReturnArgs} args - Arguments to update many Websites.
     * @example
     * // Update many Websites
     * const website = await prisma.website.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Websites and only return the `id`
     * const websiteWithIdOnly = await prisma.website.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WebsiteUpdateManyAndReturnArgs>(args: SelectSubset<T, WebsiteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Website.
     * @param {WebsiteUpsertArgs} args - Arguments to update or create a Website.
     * @example
     * // Update or create a Website
     * const website = await prisma.website.upsert({
     *   create: {
     *     // ... data to create a Website
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Website we want to update
     *   }
     * })
     */
    upsert<T extends WebsiteUpsertArgs>(args: SelectSubset<T, WebsiteUpsertArgs<ExtArgs>>): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Websites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteCountArgs} args - Arguments to filter Websites to count.
     * @example
     * // Count the number of Websites
     * const count = await prisma.website.count({
     *   where: {
     *     // ... the filter for the Websites we want to count
     *   }
     * })
    **/
    count<T extends WebsiteCountArgs>(
      args?: Subset<T, WebsiteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WebsiteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Website.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WebsiteAggregateArgs>(args: Subset<T, WebsiteAggregateArgs>): Prisma.PrismaPromise<GetWebsiteAggregateType<T>>

    /**
     * Group by Website.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WebsiteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WebsiteGroupByArgs['orderBy'] }
        : { orderBy?: WebsiteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WebsiteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebsiteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Website model
   */
  readonly fields: WebsiteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Website.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WebsiteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    WebsiteTicks<T extends Website$WebsiteTicksArgs<ExtArgs> = {}>(args?: Subset<T, Website$WebsiteTicksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebsiteTicksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Website model
   */
  interface WebsiteFieldRefs {
    readonly id: FieldRef<"Website", 'String'>
    readonly url: FieldRef<"Website", 'String'>
    readonly userId: FieldRef<"Website", 'String'>
    readonly ticks: FieldRef<"Website", 'Float'>
    readonly disabled: FieldRef<"Website", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Website findUnique
   */
  export type WebsiteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteInclude<ExtArgs> | null
    /**
     * Filter, which Website to fetch.
     */
    where: WebsiteWhereUniqueInput
  }

  /**
   * Website findUniqueOrThrow
   */
  export type WebsiteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteInclude<ExtArgs> | null
    /**
     * Filter, which Website to fetch.
     */
    where: WebsiteWhereUniqueInput
  }

  /**
   * Website findFirst
   */
  export type WebsiteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteInclude<ExtArgs> | null
    /**
     * Filter, which Website to fetch.
     */
    where?: WebsiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Websites to fetch.
     */
    orderBy?: WebsiteOrderByWithRelationInput | WebsiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Websites.
     */
    cursor?: WebsiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Websites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Websites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Websites.
     */
    distinct?: WebsiteScalarFieldEnum | WebsiteScalarFieldEnum[]
  }

  /**
   * Website findFirstOrThrow
   */
  export type WebsiteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteInclude<ExtArgs> | null
    /**
     * Filter, which Website to fetch.
     */
    where?: WebsiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Websites to fetch.
     */
    orderBy?: WebsiteOrderByWithRelationInput | WebsiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Websites.
     */
    cursor?: WebsiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Websites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Websites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Websites.
     */
    distinct?: WebsiteScalarFieldEnum | WebsiteScalarFieldEnum[]
  }

  /**
   * Website findMany
   */
  export type WebsiteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteInclude<ExtArgs> | null
    /**
     * Filter, which Websites to fetch.
     */
    where?: WebsiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Websites to fetch.
     */
    orderBy?: WebsiteOrderByWithRelationInput | WebsiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Websites.
     */
    cursor?: WebsiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Websites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Websites.
     */
    skip?: number
    distinct?: WebsiteScalarFieldEnum | WebsiteScalarFieldEnum[]
  }

  /**
   * Website create
   */
  export type WebsiteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteInclude<ExtArgs> | null
    /**
     * The data needed to create a Website.
     */
    data: XOR<WebsiteCreateInput, WebsiteUncheckedCreateInput>
  }

  /**
   * Website createMany
   */
  export type WebsiteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Websites.
     */
    data: WebsiteCreateManyInput | WebsiteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Website createManyAndReturn
   */
  export type WebsiteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * The data used to create many Websites.
     */
    data: WebsiteCreateManyInput | WebsiteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Website update
   */
  export type WebsiteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteInclude<ExtArgs> | null
    /**
     * The data needed to update a Website.
     */
    data: XOR<WebsiteUpdateInput, WebsiteUncheckedUpdateInput>
    /**
     * Choose, which Website to update.
     */
    where: WebsiteWhereUniqueInput
  }

  /**
   * Website updateMany
   */
  export type WebsiteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Websites.
     */
    data: XOR<WebsiteUpdateManyMutationInput, WebsiteUncheckedUpdateManyInput>
    /**
     * Filter which Websites to update
     */
    where?: WebsiteWhereInput
    /**
     * Limit how many Websites to update.
     */
    limit?: number
  }

  /**
   * Website updateManyAndReturn
   */
  export type WebsiteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * The data used to update Websites.
     */
    data: XOR<WebsiteUpdateManyMutationInput, WebsiteUncheckedUpdateManyInput>
    /**
     * Filter which Websites to update
     */
    where?: WebsiteWhereInput
    /**
     * Limit how many Websites to update.
     */
    limit?: number
  }

  /**
   * Website upsert
   */
  export type WebsiteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteInclude<ExtArgs> | null
    /**
     * The filter to search for the Website to update in case it exists.
     */
    where: WebsiteWhereUniqueInput
    /**
     * In case the Website found by the `where` argument doesn't exist, create a new Website with this data.
     */
    create: XOR<WebsiteCreateInput, WebsiteUncheckedCreateInput>
    /**
     * In case the Website was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WebsiteUpdateInput, WebsiteUncheckedUpdateInput>
  }

  /**
   * Website delete
   */
  export type WebsiteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteInclude<ExtArgs> | null
    /**
     * Filter which Website to delete.
     */
    where: WebsiteWhereUniqueInput
  }

  /**
   * Website deleteMany
   */
  export type WebsiteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Websites to delete
     */
    where?: WebsiteWhereInput
    /**
     * Limit how many Websites to delete.
     */
    limit?: number
  }

  /**
   * Website.WebsiteTicks
   */
  export type Website$WebsiteTicksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteTicks
     */
    select?: WebsiteTicksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteTicks
     */
    omit?: WebsiteTicksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteTicksInclude<ExtArgs> | null
    where?: WebsiteTicksWhereInput
    orderBy?: WebsiteTicksOrderByWithRelationInput | WebsiteTicksOrderByWithRelationInput[]
    cursor?: WebsiteTicksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WebsiteTicksScalarFieldEnum | WebsiteTicksScalarFieldEnum[]
  }

  /**
   * Website without action
   */
  export type WebsiteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteInclude<ExtArgs> | null
  }


  /**
   * Model Validators
   */

  export type AggregateValidators = {
    _count: ValidatorsCountAggregateOutputType | null
    _avg: ValidatorsAvgAggregateOutputType | null
    _sum: ValidatorsSumAggregateOutputType | null
    _min: ValidatorsMinAggregateOutputType | null
    _max: ValidatorsMaxAggregateOutputType | null
  }

  export type ValidatorsAvgAggregateOutputType = {
    latency: number | null
  }

  export type ValidatorsSumAggregateOutputType = {
    latency: number | null
  }

  export type ValidatorsMinAggregateOutputType = {
    id: string | null
    publicKey: string | null
    location: string | null
    latency: number | null
    ipAddress: string | null
  }

  export type ValidatorsMaxAggregateOutputType = {
    id: string | null
    publicKey: string | null
    location: string | null
    latency: number | null
    ipAddress: string | null
  }

  export type ValidatorsCountAggregateOutputType = {
    id: number
    publicKey: number
    location: number
    latency: number
    ipAddress: number
    _all: number
  }


  export type ValidatorsAvgAggregateInputType = {
    latency?: true
  }

  export type ValidatorsSumAggregateInputType = {
    latency?: true
  }

  export type ValidatorsMinAggregateInputType = {
    id?: true
    publicKey?: true
    location?: true
    latency?: true
    ipAddress?: true
  }

  export type ValidatorsMaxAggregateInputType = {
    id?: true
    publicKey?: true
    location?: true
    latency?: true
    ipAddress?: true
  }

  export type ValidatorsCountAggregateInputType = {
    id?: true
    publicKey?: true
    location?: true
    latency?: true
    ipAddress?: true
    _all?: true
  }

  export type ValidatorsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Validators to aggregate.
     */
    where?: ValidatorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Validators to fetch.
     */
    orderBy?: ValidatorsOrderByWithRelationInput | ValidatorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ValidatorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Validators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Validators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Validators
    **/
    _count?: true | ValidatorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ValidatorsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ValidatorsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ValidatorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ValidatorsMaxAggregateInputType
  }

  export type GetValidatorsAggregateType<T extends ValidatorsAggregateArgs> = {
        [P in keyof T & keyof AggregateValidators]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateValidators[P]>
      : GetScalarType<T[P], AggregateValidators[P]>
  }




  export type ValidatorsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ValidatorsWhereInput
    orderBy?: ValidatorsOrderByWithAggregationInput | ValidatorsOrderByWithAggregationInput[]
    by: ValidatorsScalarFieldEnum[] | ValidatorsScalarFieldEnum
    having?: ValidatorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ValidatorsCountAggregateInputType | true
    _avg?: ValidatorsAvgAggregateInputType
    _sum?: ValidatorsSumAggregateInputType
    _min?: ValidatorsMinAggregateInputType
    _max?: ValidatorsMaxAggregateInputType
  }

  export type ValidatorsGroupByOutputType = {
    id: string
    publicKey: string
    location: string
    latency: number
    ipAddress: string
    _count: ValidatorsCountAggregateOutputType | null
    _avg: ValidatorsAvgAggregateOutputType | null
    _sum: ValidatorsSumAggregateOutputType | null
    _min: ValidatorsMinAggregateOutputType | null
    _max: ValidatorsMaxAggregateOutputType | null
  }

  type GetValidatorsGroupByPayload<T extends ValidatorsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ValidatorsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ValidatorsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ValidatorsGroupByOutputType[P]>
            : GetScalarType<T[P], ValidatorsGroupByOutputType[P]>
        }
      >
    >


  export type ValidatorsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicKey?: boolean
    location?: boolean
    latency?: boolean
    ipAddress?: boolean
    ticks?: boolean | Validators$ticksArgs<ExtArgs>
    _count?: boolean | ValidatorsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["validators"]>

  export type ValidatorsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicKey?: boolean
    location?: boolean
    latency?: boolean
    ipAddress?: boolean
  }, ExtArgs["result"]["validators"]>

  export type ValidatorsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicKey?: boolean
    location?: boolean
    latency?: boolean
    ipAddress?: boolean
  }, ExtArgs["result"]["validators"]>

  export type ValidatorsSelectScalar = {
    id?: boolean
    publicKey?: boolean
    location?: boolean
    latency?: boolean
    ipAddress?: boolean
  }

  export type ValidatorsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "publicKey" | "location" | "latency" | "ipAddress", ExtArgs["result"]["validators"]>
  export type ValidatorsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticks?: boolean | Validators$ticksArgs<ExtArgs>
    _count?: boolean | ValidatorsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ValidatorsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ValidatorsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ValidatorsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Validators"
    objects: {
      ticks: Prisma.$WebsiteTicksPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      publicKey: string
      location: string
      latency: number
      ipAddress: string
    }, ExtArgs["result"]["validators"]>
    composites: {}
  }

  type ValidatorsGetPayload<S extends boolean | null | undefined | ValidatorsDefaultArgs> = $Result.GetResult<Prisma.$ValidatorsPayload, S>

  type ValidatorsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ValidatorsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ValidatorsCountAggregateInputType | true
    }

  export interface ValidatorsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Validators'], meta: { name: 'Validators' } }
    /**
     * Find zero or one Validators that matches the filter.
     * @param {ValidatorsFindUniqueArgs} args - Arguments to find a Validators
     * @example
     * // Get one Validators
     * const validators = await prisma.validators.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ValidatorsFindUniqueArgs>(args: SelectSubset<T, ValidatorsFindUniqueArgs<ExtArgs>>): Prisma__ValidatorsClient<$Result.GetResult<Prisma.$ValidatorsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Validators that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ValidatorsFindUniqueOrThrowArgs} args - Arguments to find a Validators
     * @example
     * // Get one Validators
     * const validators = await prisma.validators.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ValidatorsFindUniqueOrThrowArgs>(args: SelectSubset<T, ValidatorsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ValidatorsClient<$Result.GetResult<Prisma.$ValidatorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Validators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValidatorsFindFirstArgs} args - Arguments to find a Validators
     * @example
     * // Get one Validators
     * const validators = await prisma.validators.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ValidatorsFindFirstArgs>(args?: SelectSubset<T, ValidatorsFindFirstArgs<ExtArgs>>): Prisma__ValidatorsClient<$Result.GetResult<Prisma.$ValidatorsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Validators that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValidatorsFindFirstOrThrowArgs} args - Arguments to find a Validators
     * @example
     * // Get one Validators
     * const validators = await prisma.validators.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ValidatorsFindFirstOrThrowArgs>(args?: SelectSubset<T, ValidatorsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ValidatorsClient<$Result.GetResult<Prisma.$ValidatorsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Validators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValidatorsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Validators
     * const validators = await prisma.validators.findMany()
     * 
     * // Get first 10 Validators
     * const validators = await prisma.validators.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const validatorsWithIdOnly = await prisma.validators.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ValidatorsFindManyArgs>(args?: SelectSubset<T, ValidatorsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ValidatorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Validators.
     * @param {ValidatorsCreateArgs} args - Arguments to create a Validators.
     * @example
     * // Create one Validators
     * const Validators = await prisma.validators.create({
     *   data: {
     *     // ... data to create a Validators
     *   }
     * })
     * 
     */
    create<T extends ValidatorsCreateArgs>(args: SelectSubset<T, ValidatorsCreateArgs<ExtArgs>>): Prisma__ValidatorsClient<$Result.GetResult<Prisma.$ValidatorsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Validators.
     * @param {ValidatorsCreateManyArgs} args - Arguments to create many Validators.
     * @example
     * // Create many Validators
     * const validators = await prisma.validators.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ValidatorsCreateManyArgs>(args?: SelectSubset<T, ValidatorsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Validators and returns the data saved in the database.
     * @param {ValidatorsCreateManyAndReturnArgs} args - Arguments to create many Validators.
     * @example
     * // Create many Validators
     * const validators = await prisma.validators.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Validators and only return the `id`
     * const validatorsWithIdOnly = await prisma.validators.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ValidatorsCreateManyAndReturnArgs>(args?: SelectSubset<T, ValidatorsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ValidatorsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Validators.
     * @param {ValidatorsDeleteArgs} args - Arguments to delete one Validators.
     * @example
     * // Delete one Validators
     * const Validators = await prisma.validators.delete({
     *   where: {
     *     // ... filter to delete one Validators
     *   }
     * })
     * 
     */
    delete<T extends ValidatorsDeleteArgs>(args: SelectSubset<T, ValidatorsDeleteArgs<ExtArgs>>): Prisma__ValidatorsClient<$Result.GetResult<Prisma.$ValidatorsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Validators.
     * @param {ValidatorsUpdateArgs} args - Arguments to update one Validators.
     * @example
     * // Update one Validators
     * const validators = await prisma.validators.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ValidatorsUpdateArgs>(args: SelectSubset<T, ValidatorsUpdateArgs<ExtArgs>>): Prisma__ValidatorsClient<$Result.GetResult<Prisma.$ValidatorsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Validators.
     * @param {ValidatorsDeleteManyArgs} args - Arguments to filter Validators to delete.
     * @example
     * // Delete a few Validators
     * const { count } = await prisma.validators.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ValidatorsDeleteManyArgs>(args?: SelectSubset<T, ValidatorsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Validators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValidatorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Validators
     * const validators = await prisma.validators.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ValidatorsUpdateManyArgs>(args: SelectSubset<T, ValidatorsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Validators and returns the data updated in the database.
     * @param {ValidatorsUpdateManyAndReturnArgs} args - Arguments to update many Validators.
     * @example
     * // Update many Validators
     * const validators = await prisma.validators.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Validators and only return the `id`
     * const validatorsWithIdOnly = await prisma.validators.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ValidatorsUpdateManyAndReturnArgs>(args: SelectSubset<T, ValidatorsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ValidatorsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Validators.
     * @param {ValidatorsUpsertArgs} args - Arguments to update or create a Validators.
     * @example
     * // Update or create a Validators
     * const validators = await prisma.validators.upsert({
     *   create: {
     *     // ... data to create a Validators
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Validators we want to update
     *   }
     * })
     */
    upsert<T extends ValidatorsUpsertArgs>(args: SelectSubset<T, ValidatorsUpsertArgs<ExtArgs>>): Prisma__ValidatorsClient<$Result.GetResult<Prisma.$ValidatorsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Validators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValidatorsCountArgs} args - Arguments to filter Validators to count.
     * @example
     * // Count the number of Validators
     * const count = await prisma.validators.count({
     *   where: {
     *     // ... the filter for the Validators we want to count
     *   }
     * })
    **/
    count<T extends ValidatorsCountArgs>(
      args?: Subset<T, ValidatorsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ValidatorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Validators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValidatorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ValidatorsAggregateArgs>(args: Subset<T, ValidatorsAggregateArgs>): Prisma.PrismaPromise<GetValidatorsAggregateType<T>>

    /**
     * Group by Validators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValidatorsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ValidatorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ValidatorsGroupByArgs['orderBy'] }
        : { orderBy?: ValidatorsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ValidatorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetValidatorsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Validators model
   */
  readonly fields: ValidatorsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Validators.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ValidatorsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticks<T extends Validators$ticksArgs<ExtArgs> = {}>(args?: Subset<T, Validators$ticksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebsiteTicksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Validators model
   */
  interface ValidatorsFieldRefs {
    readonly id: FieldRef<"Validators", 'String'>
    readonly publicKey: FieldRef<"Validators", 'String'>
    readonly location: FieldRef<"Validators", 'String'>
    readonly latency: FieldRef<"Validators", 'Float'>
    readonly ipAddress: FieldRef<"Validators", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Validators findUnique
   */
  export type ValidatorsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Validators
     */
    select?: ValidatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Validators
     */
    omit?: ValidatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValidatorsInclude<ExtArgs> | null
    /**
     * Filter, which Validators to fetch.
     */
    where: ValidatorsWhereUniqueInput
  }

  /**
   * Validators findUniqueOrThrow
   */
  export type ValidatorsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Validators
     */
    select?: ValidatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Validators
     */
    omit?: ValidatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValidatorsInclude<ExtArgs> | null
    /**
     * Filter, which Validators to fetch.
     */
    where: ValidatorsWhereUniqueInput
  }

  /**
   * Validators findFirst
   */
  export type ValidatorsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Validators
     */
    select?: ValidatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Validators
     */
    omit?: ValidatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValidatorsInclude<ExtArgs> | null
    /**
     * Filter, which Validators to fetch.
     */
    where?: ValidatorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Validators to fetch.
     */
    orderBy?: ValidatorsOrderByWithRelationInput | ValidatorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Validators.
     */
    cursor?: ValidatorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Validators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Validators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Validators.
     */
    distinct?: ValidatorsScalarFieldEnum | ValidatorsScalarFieldEnum[]
  }

  /**
   * Validators findFirstOrThrow
   */
  export type ValidatorsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Validators
     */
    select?: ValidatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Validators
     */
    omit?: ValidatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValidatorsInclude<ExtArgs> | null
    /**
     * Filter, which Validators to fetch.
     */
    where?: ValidatorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Validators to fetch.
     */
    orderBy?: ValidatorsOrderByWithRelationInput | ValidatorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Validators.
     */
    cursor?: ValidatorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Validators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Validators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Validators.
     */
    distinct?: ValidatorsScalarFieldEnum | ValidatorsScalarFieldEnum[]
  }

  /**
   * Validators findMany
   */
  export type ValidatorsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Validators
     */
    select?: ValidatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Validators
     */
    omit?: ValidatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValidatorsInclude<ExtArgs> | null
    /**
     * Filter, which Validators to fetch.
     */
    where?: ValidatorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Validators to fetch.
     */
    orderBy?: ValidatorsOrderByWithRelationInput | ValidatorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Validators.
     */
    cursor?: ValidatorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Validators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Validators.
     */
    skip?: number
    distinct?: ValidatorsScalarFieldEnum | ValidatorsScalarFieldEnum[]
  }

  /**
   * Validators create
   */
  export type ValidatorsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Validators
     */
    select?: ValidatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Validators
     */
    omit?: ValidatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValidatorsInclude<ExtArgs> | null
    /**
     * The data needed to create a Validators.
     */
    data: XOR<ValidatorsCreateInput, ValidatorsUncheckedCreateInput>
  }

  /**
   * Validators createMany
   */
  export type ValidatorsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Validators.
     */
    data: ValidatorsCreateManyInput | ValidatorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Validators createManyAndReturn
   */
  export type ValidatorsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Validators
     */
    select?: ValidatorsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Validators
     */
    omit?: ValidatorsOmit<ExtArgs> | null
    /**
     * The data used to create many Validators.
     */
    data: ValidatorsCreateManyInput | ValidatorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Validators update
   */
  export type ValidatorsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Validators
     */
    select?: ValidatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Validators
     */
    omit?: ValidatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValidatorsInclude<ExtArgs> | null
    /**
     * The data needed to update a Validators.
     */
    data: XOR<ValidatorsUpdateInput, ValidatorsUncheckedUpdateInput>
    /**
     * Choose, which Validators to update.
     */
    where: ValidatorsWhereUniqueInput
  }

  /**
   * Validators updateMany
   */
  export type ValidatorsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Validators.
     */
    data: XOR<ValidatorsUpdateManyMutationInput, ValidatorsUncheckedUpdateManyInput>
    /**
     * Filter which Validators to update
     */
    where?: ValidatorsWhereInput
    /**
     * Limit how many Validators to update.
     */
    limit?: number
  }

  /**
   * Validators updateManyAndReturn
   */
  export type ValidatorsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Validators
     */
    select?: ValidatorsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Validators
     */
    omit?: ValidatorsOmit<ExtArgs> | null
    /**
     * The data used to update Validators.
     */
    data: XOR<ValidatorsUpdateManyMutationInput, ValidatorsUncheckedUpdateManyInput>
    /**
     * Filter which Validators to update
     */
    where?: ValidatorsWhereInput
    /**
     * Limit how many Validators to update.
     */
    limit?: number
  }

  /**
   * Validators upsert
   */
  export type ValidatorsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Validators
     */
    select?: ValidatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Validators
     */
    omit?: ValidatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValidatorsInclude<ExtArgs> | null
    /**
     * The filter to search for the Validators to update in case it exists.
     */
    where: ValidatorsWhereUniqueInput
    /**
     * In case the Validators found by the `where` argument doesn't exist, create a new Validators with this data.
     */
    create: XOR<ValidatorsCreateInput, ValidatorsUncheckedCreateInput>
    /**
     * In case the Validators was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ValidatorsUpdateInput, ValidatorsUncheckedUpdateInput>
  }

  /**
   * Validators delete
   */
  export type ValidatorsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Validators
     */
    select?: ValidatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Validators
     */
    omit?: ValidatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValidatorsInclude<ExtArgs> | null
    /**
     * Filter which Validators to delete.
     */
    where: ValidatorsWhereUniqueInput
  }

  /**
   * Validators deleteMany
   */
  export type ValidatorsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Validators to delete
     */
    where?: ValidatorsWhereInput
    /**
     * Limit how many Validators to delete.
     */
    limit?: number
  }

  /**
   * Validators.ticks
   */
  export type Validators$ticksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteTicks
     */
    select?: WebsiteTicksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteTicks
     */
    omit?: WebsiteTicksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteTicksInclude<ExtArgs> | null
    where?: WebsiteTicksWhereInput
    orderBy?: WebsiteTicksOrderByWithRelationInput | WebsiteTicksOrderByWithRelationInput[]
    cursor?: WebsiteTicksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WebsiteTicksScalarFieldEnum | WebsiteTicksScalarFieldEnum[]
  }

  /**
   * Validators without action
   */
  export type ValidatorsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Validators
     */
    select?: ValidatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Validators
     */
    omit?: ValidatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValidatorsInclude<ExtArgs> | null
  }


  /**
   * Model WebsiteTicks
   */

  export type AggregateWebsiteTicks = {
    _count: WebsiteTicksCountAggregateOutputType | null
    _avg: WebsiteTicksAvgAggregateOutputType | null
    _sum: WebsiteTicksSumAggregateOutputType | null
    _min: WebsiteTicksMinAggregateOutputType | null
    _max: WebsiteTicksMaxAggregateOutputType | null
  }

  export type WebsiteTicksAvgAggregateOutputType = {
    latency: number | null
  }

  export type WebsiteTicksSumAggregateOutputType = {
    latency: number | null
  }

  export type WebsiteTicksMinAggregateOutputType = {
    id: string | null
    websiteId: string | null
    validatorId: string | null
    status: $Enums.WebsiteStatus | null
    latency: number | null
    createdAt: Date | null
  }

  export type WebsiteTicksMaxAggregateOutputType = {
    id: string | null
    websiteId: string | null
    validatorId: string | null
    status: $Enums.WebsiteStatus | null
    latency: number | null
    createdAt: Date | null
  }

  export type WebsiteTicksCountAggregateOutputType = {
    id: number
    websiteId: number
    validatorId: number
    status: number
    latency: number
    createdAt: number
    _all: number
  }


  export type WebsiteTicksAvgAggregateInputType = {
    latency?: true
  }

  export type WebsiteTicksSumAggregateInputType = {
    latency?: true
  }

  export type WebsiteTicksMinAggregateInputType = {
    id?: true
    websiteId?: true
    validatorId?: true
    status?: true
    latency?: true
    createdAt?: true
  }

  export type WebsiteTicksMaxAggregateInputType = {
    id?: true
    websiteId?: true
    validatorId?: true
    status?: true
    latency?: true
    createdAt?: true
  }

  export type WebsiteTicksCountAggregateInputType = {
    id?: true
    websiteId?: true
    validatorId?: true
    status?: true
    latency?: true
    createdAt?: true
    _all?: true
  }

  export type WebsiteTicksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebsiteTicks to aggregate.
     */
    where?: WebsiteTicksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebsiteTicks to fetch.
     */
    orderBy?: WebsiteTicksOrderByWithRelationInput | WebsiteTicksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WebsiteTicksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebsiteTicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebsiteTicks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WebsiteTicks
    **/
    _count?: true | WebsiteTicksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WebsiteTicksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WebsiteTicksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WebsiteTicksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WebsiteTicksMaxAggregateInputType
  }

  export type GetWebsiteTicksAggregateType<T extends WebsiteTicksAggregateArgs> = {
        [P in keyof T & keyof AggregateWebsiteTicks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWebsiteTicks[P]>
      : GetScalarType<T[P], AggregateWebsiteTicks[P]>
  }




  export type WebsiteTicksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebsiteTicksWhereInput
    orderBy?: WebsiteTicksOrderByWithAggregationInput | WebsiteTicksOrderByWithAggregationInput[]
    by: WebsiteTicksScalarFieldEnum[] | WebsiteTicksScalarFieldEnum
    having?: WebsiteTicksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WebsiteTicksCountAggregateInputType | true
    _avg?: WebsiteTicksAvgAggregateInputType
    _sum?: WebsiteTicksSumAggregateInputType
    _min?: WebsiteTicksMinAggregateInputType
    _max?: WebsiteTicksMaxAggregateInputType
  }

  export type WebsiteTicksGroupByOutputType = {
    id: string
    websiteId: string
    validatorId: string
    status: $Enums.WebsiteStatus
    latency: number
    createdAt: Date
    _count: WebsiteTicksCountAggregateOutputType | null
    _avg: WebsiteTicksAvgAggregateOutputType | null
    _sum: WebsiteTicksSumAggregateOutputType | null
    _min: WebsiteTicksMinAggregateOutputType | null
    _max: WebsiteTicksMaxAggregateOutputType | null
  }

  type GetWebsiteTicksGroupByPayload<T extends WebsiteTicksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WebsiteTicksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WebsiteTicksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WebsiteTicksGroupByOutputType[P]>
            : GetScalarType<T[P], WebsiteTicksGroupByOutputType[P]>
        }
      >
    >


  export type WebsiteTicksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    websiteId?: boolean
    validatorId?: boolean
    status?: boolean
    latency?: boolean
    createdAt?: boolean
    validator?: boolean | ValidatorsDefaultArgs<ExtArgs>
    website?: boolean | WebsiteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["websiteTicks"]>

  export type WebsiteTicksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    websiteId?: boolean
    validatorId?: boolean
    status?: boolean
    latency?: boolean
    createdAt?: boolean
    validator?: boolean | ValidatorsDefaultArgs<ExtArgs>
    website?: boolean | WebsiteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["websiteTicks"]>

  export type WebsiteTicksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    websiteId?: boolean
    validatorId?: boolean
    status?: boolean
    latency?: boolean
    createdAt?: boolean
    validator?: boolean | ValidatorsDefaultArgs<ExtArgs>
    website?: boolean | WebsiteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["websiteTicks"]>

  export type WebsiteTicksSelectScalar = {
    id?: boolean
    websiteId?: boolean
    validatorId?: boolean
    status?: boolean
    latency?: boolean
    createdAt?: boolean
  }

  export type WebsiteTicksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "websiteId" | "validatorId" | "status" | "latency" | "createdAt", ExtArgs["result"]["websiteTicks"]>
  export type WebsiteTicksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    validator?: boolean | ValidatorsDefaultArgs<ExtArgs>
    website?: boolean | WebsiteDefaultArgs<ExtArgs>
  }
  export type WebsiteTicksIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    validator?: boolean | ValidatorsDefaultArgs<ExtArgs>
    website?: boolean | WebsiteDefaultArgs<ExtArgs>
  }
  export type WebsiteTicksIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    validator?: boolean | ValidatorsDefaultArgs<ExtArgs>
    website?: boolean | WebsiteDefaultArgs<ExtArgs>
  }

  export type $WebsiteTicksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WebsiteTicks"
    objects: {
      validator: Prisma.$ValidatorsPayload<ExtArgs>
      website: Prisma.$WebsitePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      websiteId: string
      validatorId: string
      status: $Enums.WebsiteStatus
      latency: number
      createdAt: Date
    }, ExtArgs["result"]["websiteTicks"]>
    composites: {}
  }

  type WebsiteTicksGetPayload<S extends boolean | null | undefined | WebsiteTicksDefaultArgs> = $Result.GetResult<Prisma.$WebsiteTicksPayload, S>

  type WebsiteTicksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WebsiteTicksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WebsiteTicksCountAggregateInputType | true
    }

  export interface WebsiteTicksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WebsiteTicks'], meta: { name: 'WebsiteTicks' } }
    /**
     * Find zero or one WebsiteTicks that matches the filter.
     * @param {WebsiteTicksFindUniqueArgs} args - Arguments to find a WebsiteTicks
     * @example
     * // Get one WebsiteTicks
     * const websiteTicks = await prisma.websiteTicks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WebsiteTicksFindUniqueArgs>(args: SelectSubset<T, WebsiteTicksFindUniqueArgs<ExtArgs>>): Prisma__WebsiteTicksClient<$Result.GetResult<Prisma.$WebsiteTicksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WebsiteTicks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WebsiteTicksFindUniqueOrThrowArgs} args - Arguments to find a WebsiteTicks
     * @example
     * // Get one WebsiteTicks
     * const websiteTicks = await prisma.websiteTicks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WebsiteTicksFindUniqueOrThrowArgs>(args: SelectSubset<T, WebsiteTicksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WebsiteTicksClient<$Result.GetResult<Prisma.$WebsiteTicksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WebsiteTicks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteTicksFindFirstArgs} args - Arguments to find a WebsiteTicks
     * @example
     * // Get one WebsiteTicks
     * const websiteTicks = await prisma.websiteTicks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WebsiteTicksFindFirstArgs>(args?: SelectSubset<T, WebsiteTicksFindFirstArgs<ExtArgs>>): Prisma__WebsiteTicksClient<$Result.GetResult<Prisma.$WebsiteTicksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WebsiteTicks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteTicksFindFirstOrThrowArgs} args - Arguments to find a WebsiteTicks
     * @example
     * // Get one WebsiteTicks
     * const websiteTicks = await prisma.websiteTicks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WebsiteTicksFindFirstOrThrowArgs>(args?: SelectSubset<T, WebsiteTicksFindFirstOrThrowArgs<ExtArgs>>): Prisma__WebsiteTicksClient<$Result.GetResult<Prisma.$WebsiteTicksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WebsiteTicks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteTicksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WebsiteTicks
     * const websiteTicks = await prisma.websiteTicks.findMany()
     * 
     * // Get first 10 WebsiteTicks
     * const websiteTicks = await prisma.websiteTicks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const websiteTicksWithIdOnly = await prisma.websiteTicks.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WebsiteTicksFindManyArgs>(args?: SelectSubset<T, WebsiteTicksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebsiteTicksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WebsiteTicks.
     * @param {WebsiteTicksCreateArgs} args - Arguments to create a WebsiteTicks.
     * @example
     * // Create one WebsiteTicks
     * const WebsiteTicks = await prisma.websiteTicks.create({
     *   data: {
     *     // ... data to create a WebsiteTicks
     *   }
     * })
     * 
     */
    create<T extends WebsiteTicksCreateArgs>(args: SelectSubset<T, WebsiteTicksCreateArgs<ExtArgs>>): Prisma__WebsiteTicksClient<$Result.GetResult<Prisma.$WebsiteTicksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WebsiteTicks.
     * @param {WebsiteTicksCreateManyArgs} args - Arguments to create many WebsiteTicks.
     * @example
     * // Create many WebsiteTicks
     * const websiteTicks = await prisma.websiteTicks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WebsiteTicksCreateManyArgs>(args?: SelectSubset<T, WebsiteTicksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WebsiteTicks and returns the data saved in the database.
     * @param {WebsiteTicksCreateManyAndReturnArgs} args - Arguments to create many WebsiteTicks.
     * @example
     * // Create many WebsiteTicks
     * const websiteTicks = await prisma.websiteTicks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WebsiteTicks and only return the `id`
     * const websiteTicksWithIdOnly = await prisma.websiteTicks.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WebsiteTicksCreateManyAndReturnArgs>(args?: SelectSubset<T, WebsiteTicksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebsiteTicksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WebsiteTicks.
     * @param {WebsiteTicksDeleteArgs} args - Arguments to delete one WebsiteTicks.
     * @example
     * // Delete one WebsiteTicks
     * const WebsiteTicks = await prisma.websiteTicks.delete({
     *   where: {
     *     // ... filter to delete one WebsiteTicks
     *   }
     * })
     * 
     */
    delete<T extends WebsiteTicksDeleteArgs>(args: SelectSubset<T, WebsiteTicksDeleteArgs<ExtArgs>>): Prisma__WebsiteTicksClient<$Result.GetResult<Prisma.$WebsiteTicksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WebsiteTicks.
     * @param {WebsiteTicksUpdateArgs} args - Arguments to update one WebsiteTicks.
     * @example
     * // Update one WebsiteTicks
     * const websiteTicks = await prisma.websiteTicks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WebsiteTicksUpdateArgs>(args: SelectSubset<T, WebsiteTicksUpdateArgs<ExtArgs>>): Prisma__WebsiteTicksClient<$Result.GetResult<Prisma.$WebsiteTicksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WebsiteTicks.
     * @param {WebsiteTicksDeleteManyArgs} args - Arguments to filter WebsiteTicks to delete.
     * @example
     * // Delete a few WebsiteTicks
     * const { count } = await prisma.websiteTicks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WebsiteTicksDeleteManyArgs>(args?: SelectSubset<T, WebsiteTicksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WebsiteTicks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteTicksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WebsiteTicks
     * const websiteTicks = await prisma.websiteTicks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WebsiteTicksUpdateManyArgs>(args: SelectSubset<T, WebsiteTicksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WebsiteTicks and returns the data updated in the database.
     * @param {WebsiteTicksUpdateManyAndReturnArgs} args - Arguments to update many WebsiteTicks.
     * @example
     * // Update many WebsiteTicks
     * const websiteTicks = await prisma.websiteTicks.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WebsiteTicks and only return the `id`
     * const websiteTicksWithIdOnly = await prisma.websiteTicks.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WebsiteTicksUpdateManyAndReturnArgs>(args: SelectSubset<T, WebsiteTicksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebsiteTicksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WebsiteTicks.
     * @param {WebsiteTicksUpsertArgs} args - Arguments to update or create a WebsiteTicks.
     * @example
     * // Update or create a WebsiteTicks
     * const websiteTicks = await prisma.websiteTicks.upsert({
     *   create: {
     *     // ... data to create a WebsiteTicks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WebsiteTicks we want to update
     *   }
     * })
     */
    upsert<T extends WebsiteTicksUpsertArgs>(args: SelectSubset<T, WebsiteTicksUpsertArgs<ExtArgs>>): Prisma__WebsiteTicksClient<$Result.GetResult<Prisma.$WebsiteTicksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WebsiteTicks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteTicksCountArgs} args - Arguments to filter WebsiteTicks to count.
     * @example
     * // Count the number of WebsiteTicks
     * const count = await prisma.websiteTicks.count({
     *   where: {
     *     // ... the filter for the WebsiteTicks we want to count
     *   }
     * })
    **/
    count<T extends WebsiteTicksCountArgs>(
      args?: Subset<T, WebsiteTicksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WebsiteTicksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WebsiteTicks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteTicksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WebsiteTicksAggregateArgs>(args: Subset<T, WebsiteTicksAggregateArgs>): Prisma.PrismaPromise<GetWebsiteTicksAggregateType<T>>

    /**
     * Group by WebsiteTicks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteTicksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WebsiteTicksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WebsiteTicksGroupByArgs['orderBy'] }
        : { orderBy?: WebsiteTicksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WebsiteTicksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebsiteTicksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WebsiteTicks model
   */
  readonly fields: WebsiteTicksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WebsiteTicks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WebsiteTicksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    validator<T extends ValidatorsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ValidatorsDefaultArgs<ExtArgs>>): Prisma__ValidatorsClient<$Result.GetResult<Prisma.$ValidatorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    website<T extends WebsiteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WebsiteDefaultArgs<ExtArgs>>): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WebsiteTicks model
   */
  interface WebsiteTicksFieldRefs {
    readonly id: FieldRef<"WebsiteTicks", 'String'>
    readonly websiteId: FieldRef<"WebsiteTicks", 'String'>
    readonly validatorId: FieldRef<"WebsiteTicks", 'String'>
    readonly status: FieldRef<"WebsiteTicks", 'WebsiteStatus'>
    readonly latency: FieldRef<"WebsiteTicks", 'Float'>
    readonly createdAt: FieldRef<"WebsiteTicks", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WebsiteTicks findUnique
   */
  export type WebsiteTicksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteTicks
     */
    select?: WebsiteTicksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteTicks
     */
    omit?: WebsiteTicksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteTicksInclude<ExtArgs> | null
    /**
     * Filter, which WebsiteTicks to fetch.
     */
    where: WebsiteTicksWhereUniqueInput
  }

  /**
   * WebsiteTicks findUniqueOrThrow
   */
  export type WebsiteTicksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteTicks
     */
    select?: WebsiteTicksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteTicks
     */
    omit?: WebsiteTicksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteTicksInclude<ExtArgs> | null
    /**
     * Filter, which WebsiteTicks to fetch.
     */
    where: WebsiteTicksWhereUniqueInput
  }

  /**
   * WebsiteTicks findFirst
   */
  export type WebsiteTicksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteTicks
     */
    select?: WebsiteTicksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteTicks
     */
    omit?: WebsiteTicksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteTicksInclude<ExtArgs> | null
    /**
     * Filter, which WebsiteTicks to fetch.
     */
    where?: WebsiteTicksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebsiteTicks to fetch.
     */
    orderBy?: WebsiteTicksOrderByWithRelationInput | WebsiteTicksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebsiteTicks.
     */
    cursor?: WebsiteTicksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebsiteTicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebsiteTicks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebsiteTicks.
     */
    distinct?: WebsiteTicksScalarFieldEnum | WebsiteTicksScalarFieldEnum[]
  }

  /**
   * WebsiteTicks findFirstOrThrow
   */
  export type WebsiteTicksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteTicks
     */
    select?: WebsiteTicksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteTicks
     */
    omit?: WebsiteTicksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteTicksInclude<ExtArgs> | null
    /**
     * Filter, which WebsiteTicks to fetch.
     */
    where?: WebsiteTicksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebsiteTicks to fetch.
     */
    orderBy?: WebsiteTicksOrderByWithRelationInput | WebsiteTicksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebsiteTicks.
     */
    cursor?: WebsiteTicksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebsiteTicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebsiteTicks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebsiteTicks.
     */
    distinct?: WebsiteTicksScalarFieldEnum | WebsiteTicksScalarFieldEnum[]
  }

  /**
   * WebsiteTicks findMany
   */
  export type WebsiteTicksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteTicks
     */
    select?: WebsiteTicksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteTicks
     */
    omit?: WebsiteTicksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteTicksInclude<ExtArgs> | null
    /**
     * Filter, which WebsiteTicks to fetch.
     */
    where?: WebsiteTicksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebsiteTicks to fetch.
     */
    orderBy?: WebsiteTicksOrderByWithRelationInput | WebsiteTicksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WebsiteTicks.
     */
    cursor?: WebsiteTicksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebsiteTicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebsiteTicks.
     */
    skip?: number
    distinct?: WebsiteTicksScalarFieldEnum | WebsiteTicksScalarFieldEnum[]
  }

  /**
   * WebsiteTicks create
   */
  export type WebsiteTicksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteTicks
     */
    select?: WebsiteTicksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteTicks
     */
    omit?: WebsiteTicksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteTicksInclude<ExtArgs> | null
    /**
     * The data needed to create a WebsiteTicks.
     */
    data: XOR<WebsiteTicksCreateInput, WebsiteTicksUncheckedCreateInput>
  }

  /**
   * WebsiteTicks createMany
   */
  export type WebsiteTicksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WebsiteTicks.
     */
    data: WebsiteTicksCreateManyInput | WebsiteTicksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WebsiteTicks createManyAndReturn
   */
  export type WebsiteTicksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteTicks
     */
    select?: WebsiteTicksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteTicks
     */
    omit?: WebsiteTicksOmit<ExtArgs> | null
    /**
     * The data used to create many WebsiteTicks.
     */
    data: WebsiteTicksCreateManyInput | WebsiteTicksCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteTicksIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WebsiteTicks update
   */
  export type WebsiteTicksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteTicks
     */
    select?: WebsiteTicksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteTicks
     */
    omit?: WebsiteTicksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteTicksInclude<ExtArgs> | null
    /**
     * The data needed to update a WebsiteTicks.
     */
    data: XOR<WebsiteTicksUpdateInput, WebsiteTicksUncheckedUpdateInput>
    /**
     * Choose, which WebsiteTicks to update.
     */
    where: WebsiteTicksWhereUniqueInput
  }

  /**
   * WebsiteTicks updateMany
   */
  export type WebsiteTicksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WebsiteTicks.
     */
    data: XOR<WebsiteTicksUpdateManyMutationInput, WebsiteTicksUncheckedUpdateManyInput>
    /**
     * Filter which WebsiteTicks to update
     */
    where?: WebsiteTicksWhereInput
    /**
     * Limit how many WebsiteTicks to update.
     */
    limit?: number
  }

  /**
   * WebsiteTicks updateManyAndReturn
   */
  export type WebsiteTicksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteTicks
     */
    select?: WebsiteTicksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteTicks
     */
    omit?: WebsiteTicksOmit<ExtArgs> | null
    /**
     * The data used to update WebsiteTicks.
     */
    data: XOR<WebsiteTicksUpdateManyMutationInput, WebsiteTicksUncheckedUpdateManyInput>
    /**
     * Filter which WebsiteTicks to update
     */
    where?: WebsiteTicksWhereInput
    /**
     * Limit how many WebsiteTicks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteTicksIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WebsiteTicks upsert
   */
  export type WebsiteTicksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteTicks
     */
    select?: WebsiteTicksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteTicks
     */
    omit?: WebsiteTicksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteTicksInclude<ExtArgs> | null
    /**
     * The filter to search for the WebsiteTicks to update in case it exists.
     */
    where: WebsiteTicksWhereUniqueInput
    /**
     * In case the WebsiteTicks found by the `where` argument doesn't exist, create a new WebsiteTicks with this data.
     */
    create: XOR<WebsiteTicksCreateInput, WebsiteTicksUncheckedCreateInput>
    /**
     * In case the WebsiteTicks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WebsiteTicksUpdateInput, WebsiteTicksUncheckedUpdateInput>
  }

  /**
   * WebsiteTicks delete
   */
  export type WebsiteTicksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteTicks
     */
    select?: WebsiteTicksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteTicks
     */
    omit?: WebsiteTicksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteTicksInclude<ExtArgs> | null
    /**
     * Filter which WebsiteTicks to delete.
     */
    where: WebsiteTicksWhereUniqueInput
  }

  /**
   * WebsiteTicks deleteMany
   */
  export type WebsiteTicksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebsiteTicks to delete
     */
    where?: WebsiteTicksWhereInput
    /**
     * Limit how many WebsiteTicks to delete.
     */
    limit?: number
  }

  /**
   * WebsiteTicks without action
   */
  export type WebsiteTicksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteTicks
     */
    select?: WebsiteTicksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteTicks
     */
    omit?: WebsiteTicksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteTicksInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WebsiteScalarFieldEnum: {
    id: 'id',
    url: 'url',
    userId: 'userId',
    ticks: 'ticks',
    disabled: 'disabled'
  };

  export type WebsiteScalarFieldEnum = (typeof WebsiteScalarFieldEnum)[keyof typeof WebsiteScalarFieldEnum]


  export const ValidatorsScalarFieldEnum: {
    id: 'id',
    publicKey: 'publicKey',
    location: 'location',
    latency: 'latency',
    ipAddress: 'ipAddress'
  };

  export type ValidatorsScalarFieldEnum = (typeof ValidatorsScalarFieldEnum)[keyof typeof ValidatorsScalarFieldEnum]


  export const WebsiteTicksScalarFieldEnum: {
    id: 'id',
    websiteId: 'websiteId',
    validatorId: 'validatorId',
    status: 'status',
    latency: 'latency',
    createdAt: 'createdAt'
  };

  export type WebsiteTicksScalarFieldEnum = (typeof WebsiteTicksScalarFieldEnum)[keyof typeof WebsiteTicksScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'WebsiteStatus'
   */
  export type EnumWebsiteStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WebsiteStatus'>
    


  /**
   * Reference to a field of type 'WebsiteStatus[]'
   */
  export type ListEnumWebsiteStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WebsiteStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
  }

  export type WebsiteWhereInput = {
    AND?: WebsiteWhereInput | WebsiteWhereInput[]
    OR?: WebsiteWhereInput[]
    NOT?: WebsiteWhereInput | WebsiteWhereInput[]
    id?: StringFilter<"Website"> | string
    url?: StringFilter<"Website"> | string
    userId?: StringFilter<"Website"> | string
    ticks?: FloatFilter<"Website"> | number
    disabled?: BoolFilter<"Website"> | boolean
    WebsiteTicks?: WebsiteTicksListRelationFilter
  }

  export type WebsiteOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    userId?: SortOrder
    ticks?: SortOrder
    disabled?: SortOrder
    WebsiteTicks?: WebsiteTicksOrderByRelationAggregateInput
  }

  export type WebsiteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WebsiteWhereInput | WebsiteWhereInput[]
    OR?: WebsiteWhereInput[]
    NOT?: WebsiteWhereInput | WebsiteWhereInput[]
    url?: StringFilter<"Website"> | string
    userId?: StringFilter<"Website"> | string
    ticks?: FloatFilter<"Website"> | number
    disabled?: BoolFilter<"Website"> | boolean
    WebsiteTicks?: WebsiteTicksListRelationFilter
  }, "id">

  export type WebsiteOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    userId?: SortOrder
    ticks?: SortOrder
    disabled?: SortOrder
    _count?: WebsiteCountOrderByAggregateInput
    _avg?: WebsiteAvgOrderByAggregateInput
    _max?: WebsiteMaxOrderByAggregateInput
    _min?: WebsiteMinOrderByAggregateInput
    _sum?: WebsiteSumOrderByAggregateInput
  }

  export type WebsiteScalarWhereWithAggregatesInput = {
    AND?: WebsiteScalarWhereWithAggregatesInput | WebsiteScalarWhereWithAggregatesInput[]
    OR?: WebsiteScalarWhereWithAggregatesInput[]
    NOT?: WebsiteScalarWhereWithAggregatesInput | WebsiteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Website"> | string
    url?: StringWithAggregatesFilter<"Website"> | string
    userId?: StringWithAggregatesFilter<"Website"> | string
    ticks?: FloatWithAggregatesFilter<"Website"> | number
    disabled?: BoolWithAggregatesFilter<"Website"> | boolean
  }

  export type ValidatorsWhereInput = {
    AND?: ValidatorsWhereInput | ValidatorsWhereInput[]
    OR?: ValidatorsWhereInput[]
    NOT?: ValidatorsWhereInput | ValidatorsWhereInput[]
    id?: StringFilter<"Validators"> | string
    publicKey?: StringFilter<"Validators"> | string
    location?: StringFilter<"Validators"> | string
    latency?: FloatFilter<"Validators"> | number
    ipAddress?: StringFilter<"Validators"> | string
    ticks?: WebsiteTicksListRelationFilter
  }

  export type ValidatorsOrderByWithRelationInput = {
    id?: SortOrder
    publicKey?: SortOrder
    location?: SortOrder
    latency?: SortOrder
    ipAddress?: SortOrder
    ticks?: WebsiteTicksOrderByRelationAggregateInput
  }

  export type ValidatorsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    publicKey?: string
    AND?: ValidatorsWhereInput | ValidatorsWhereInput[]
    OR?: ValidatorsWhereInput[]
    NOT?: ValidatorsWhereInput | ValidatorsWhereInput[]
    location?: StringFilter<"Validators"> | string
    latency?: FloatFilter<"Validators"> | number
    ipAddress?: StringFilter<"Validators"> | string
    ticks?: WebsiteTicksListRelationFilter
  }, "id" | "publicKey">

  export type ValidatorsOrderByWithAggregationInput = {
    id?: SortOrder
    publicKey?: SortOrder
    location?: SortOrder
    latency?: SortOrder
    ipAddress?: SortOrder
    _count?: ValidatorsCountOrderByAggregateInput
    _avg?: ValidatorsAvgOrderByAggregateInput
    _max?: ValidatorsMaxOrderByAggregateInput
    _min?: ValidatorsMinOrderByAggregateInput
    _sum?: ValidatorsSumOrderByAggregateInput
  }

  export type ValidatorsScalarWhereWithAggregatesInput = {
    AND?: ValidatorsScalarWhereWithAggregatesInput | ValidatorsScalarWhereWithAggregatesInput[]
    OR?: ValidatorsScalarWhereWithAggregatesInput[]
    NOT?: ValidatorsScalarWhereWithAggregatesInput | ValidatorsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Validators"> | string
    publicKey?: StringWithAggregatesFilter<"Validators"> | string
    location?: StringWithAggregatesFilter<"Validators"> | string
    latency?: FloatWithAggregatesFilter<"Validators"> | number
    ipAddress?: StringWithAggregatesFilter<"Validators"> | string
  }

  export type WebsiteTicksWhereInput = {
    AND?: WebsiteTicksWhereInput | WebsiteTicksWhereInput[]
    OR?: WebsiteTicksWhereInput[]
    NOT?: WebsiteTicksWhereInput | WebsiteTicksWhereInput[]
    id?: StringFilter<"WebsiteTicks"> | string
    websiteId?: StringFilter<"WebsiteTicks"> | string
    validatorId?: StringFilter<"WebsiteTicks"> | string
    status?: EnumWebsiteStatusFilter<"WebsiteTicks"> | $Enums.WebsiteStatus
    latency?: FloatFilter<"WebsiteTicks"> | number
    createdAt?: DateTimeFilter<"WebsiteTicks"> | Date | string
    validator?: XOR<ValidatorsScalarRelationFilter, ValidatorsWhereInput>
    website?: XOR<WebsiteScalarRelationFilter, WebsiteWhereInput>
  }

  export type WebsiteTicksOrderByWithRelationInput = {
    id?: SortOrder
    websiteId?: SortOrder
    validatorId?: SortOrder
    status?: SortOrder
    latency?: SortOrder
    createdAt?: SortOrder
    validator?: ValidatorsOrderByWithRelationInput
    website?: WebsiteOrderByWithRelationInput
  }

  export type WebsiteTicksWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WebsiteTicksWhereInput | WebsiteTicksWhereInput[]
    OR?: WebsiteTicksWhereInput[]
    NOT?: WebsiteTicksWhereInput | WebsiteTicksWhereInput[]
    websiteId?: StringFilter<"WebsiteTicks"> | string
    validatorId?: StringFilter<"WebsiteTicks"> | string
    status?: EnumWebsiteStatusFilter<"WebsiteTicks"> | $Enums.WebsiteStatus
    latency?: FloatFilter<"WebsiteTicks"> | number
    createdAt?: DateTimeFilter<"WebsiteTicks"> | Date | string
    validator?: XOR<ValidatorsScalarRelationFilter, ValidatorsWhereInput>
    website?: XOR<WebsiteScalarRelationFilter, WebsiteWhereInput>
  }, "id">

  export type WebsiteTicksOrderByWithAggregationInput = {
    id?: SortOrder
    websiteId?: SortOrder
    validatorId?: SortOrder
    status?: SortOrder
    latency?: SortOrder
    createdAt?: SortOrder
    _count?: WebsiteTicksCountOrderByAggregateInput
    _avg?: WebsiteTicksAvgOrderByAggregateInput
    _max?: WebsiteTicksMaxOrderByAggregateInput
    _min?: WebsiteTicksMinOrderByAggregateInput
    _sum?: WebsiteTicksSumOrderByAggregateInput
  }

  export type WebsiteTicksScalarWhereWithAggregatesInput = {
    AND?: WebsiteTicksScalarWhereWithAggregatesInput | WebsiteTicksScalarWhereWithAggregatesInput[]
    OR?: WebsiteTicksScalarWhereWithAggregatesInput[]
    NOT?: WebsiteTicksScalarWhereWithAggregatesInput | WebsiteTicksScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WebsiteTicks"> | string
    websiteId?: StringWithAggregatesFilter<"WebsiteTicks"> | string
    validatorId?: StringWithAggregatesFilter<"WebsiteTicks"> | string
    status?: EnumWebsiteStatusWithAggregatesFilter<"WebsiteTicks"> | $Enums.WebsiteStatus
    latency?: FloatWithAggregatesFilter<"WebsiteTicks"> | number
    createdAt?: DateTimeWithAggregatesFilter<"WebsiteTicks"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type WebsiteCreateInput = {
    id?: string
    url: string
    userId: string
    ticks: number
    disabled?: boolean
    WebsiteTicks?: WebsiteTicksCreateNestedManyWithoutWebsiteInput
  }

  export type WebsiteUncheckedCreateInput = {
    id?: string
    url: string
    userId: string
    ticks: number
    disabled?: boolean
    WebsiteTicks?: WebsiteTicksUncheckedCreateNestedManyWithoutWebsiteInput
  }

  export type WebsiteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ticks?: FloatFieldUpdateOperationsInput | number
    disabled?: BoolFieldUpdateOperationsInput | boolean
    WebsiteTicks?: WebsiteTicksUpdateManyWithoutWebsiteNestedInput
  }

  export type WebsiteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ticks?: FloatFieldUpdateOperationsInput | number
    disabled?: BoolFieldUpdateOperationsInput | boolean
    WebsiteTicks?: WebsiteTicksUncheckedUpdateManyWithoutWebsiteNestedInput
  }

  export type WebsiteCreateManyInput = {
    id?: string
    url: string
    userId: string
    ticks: number
    disabled?: boolean
  }

  export type WebsiteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ticks?: FloatFieldUpdateOperationsInput | number
    disabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WebsiteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ticks?: FloatFieldUpdateOperationsInput | number
    disabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ValidatorsCreateInput = {
    id?: string
    publicKey: string
    location: string
    latency: number
    ipAddress: string
    ticks?: WebsiteTicksCreateNestedManyWithoutValidatorInput
  }

  export type ValidatorsUncheckedCreateInput = {
    id?: string
    publicKey: string
    location: string
    latency: number
    ipAddress: string
    ticks?: WebsiteTicksUncheckedCreateNestedManyWithoutValidatorInput
  }

  export type ValidatorsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latency?: FloatFieldUpdateOperationsInput | number
    ipAddress?: StringFieldUpdateOperationsInput | string
    ticks?: WebsiteTicksUpdateManyWithoutValidatorNestedInput
  }

  export type ValidatorsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latency?: FloatFieldUpdateOperationsInput | number
    ipAddress?: StringFieldUpdateOperationsInput | string
    ticks?: WebsiteTicksUncheckedUpdateManyWithoutValidatorNestedInput
  }

  export type ValidatorsCreateManyInput = {
    id?: string
    publicKey: string
    location: string
    latency: number
    ipAddress: string
  }

  export type ValidatorsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latency?: FloatFieldUpdateOperationsInput | number
    ipAddress?: StringFieldUpdateOperationsInput | string
  }

  export type ValidatorsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latency?: FloatFieldUpdateOperationsInput | number
    ipAddress?: StringFieldUpdateOperationsInput | string
  }

  export type WebsiteTicksCreateInput = {
    id?: string
    status: $Enums.WebsiteStatus
    latency: number
    createdAt?: Date | string
    validator: ValidatorsCreateNestedOneWithoutTicksInput
    website: WebsiteCreateNestedOneWithoutWebsiteTicksInput
  }

  export type WebsiteTicksUncheckedCreateInput = {
    id?: string
    websiteId: string
    validatorId: string
    status: $Enums.WebsiteStatus
    latency: number
    createdAt?: Date | string
  }

  export type WebsiteTicksUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumWebsiteStatusFieldUpdateOperationsInput | $Enums.WebsiteStatus
    latency?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    validator?: ValidatorsUpdateOneRequiredWithoutTicksNestedInput
    website?: WebsiteUpdateOneRequiredWithoutWebsiteTicksNestedInput
  }

  export type WebsiteTicksUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    websiteId?: StringFieldUpdateOperationsInput | string
    validatorId?: StringFieldUpdateOperationsInput | string
    status?: EnumWebsiteStatusFieldUpdateOperationsInput | $Enums.WebsiteStatus
    latency?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebsiteTicksCreateManyInput = {
    id?: string
    websiteId: string
    validatorId: string
    status: $Enums.WebsiteStatus
    latency: number
    createdAt?: Date | string
  }

  export type WebsiteTicksUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumWebsiteStatusFieldUpdateOperationsInput | $Enums.WebsiteStatus
    latency?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebsiteTicksUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    websiteId?: StringFieldUpdateOperationsInput | string
    validatorId?: StringFieldUpdateOperationsInput | string
    status?: EnumWebsiteStatusFieldUpdateOperationsInput | $Enums.WebsiteStatus
    latency?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type WebsiteTicksListRelationFilter = {
    every?: WebsiteTicksWhereInput
    some?: WebsiteTicksWhereInput
    none?: WebsiteTicksWhereInput
  }

  export type WebsiteTicksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WebsiteCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    userId?: SortOrder
    ticks?: SortOrder
    disabled?: SortOrder
  }

  export type WebsiteAvgOrderByAggregateInput = {
    ticks?: SortOrder
  }

  export type WebsiteMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    userId?: SortOrder
    ticks?: SortOrder
    disabled?: SortOrder
  }

  export type WebsiteMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    userId?: SortOrder
    ticks?: SortOrder
    disabled?: SortOrder
  }

  export type WebsiteSumOrderByAggregateInput = {
    ticks?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ValidatorsCountOrderByAggregateInput = {
    id?: SortOrder
    publicKey?: SortOrder
    location?: SortOrder
    latency?: SortOrder
    ipAddress?: SortOrder
  }

  export type ValidatorsAvgOrderByAggregateInput = {
    latency?: SortOrder
  }

  export type ValidatorsMaxOrderByAggregateInput = {
    id?: SortOrder
    publicKey?: SortOrder
    location?: SortOrder
    latency?: SortOrder
    ipAddress?: SortOrder
  }

  export type ValidatorsMinOrderByAggregateInput = {
    id?: SortOrder
    publicKey?: SortOrder
    location?: SortOrder
    latency?: SortOrder
    ipAddress?: SortOrder
  }

  export type ValidatorsSumOrderByAggregateInput = {
    latency?: SortOrder
  }

  export type EnumWebsiteStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WebsiteStatus | EnumWebsiteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WebsiteStatus[] | ListEnumWebsiteStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebsiteStatus[] | ListEnumWebsiteStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWebsiteStatusFilter<$PrismaModel> | $Enums.WebsiteStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ValidatorsScalarRelationFilter = {
    is?: ValidatorsWhereInput
    isNot?: ValidatorsWhereInput
  }

  export type WebsiteScalarRelationFilter = {
    is?: WebsiteWhereInput
    isNot?: WebsiteWhereInput
  }

  export type WebsiteTicksCountOrderByAggregateInput = {
    id?: SortOrder
    websiteId?: SortOrder
    validatorId?: SortOrder
    status?: SortOrder
    latency?: SortOrder
    createdAt?: SortOrder
  }

  export type WebsiteTicksAvgOrderByAggregateInput = {
    latency?: SortOrder
  }

  export type WebsiteTicksMaxOrderByAggregateInput = {
    id?: SortOrder
    websiteId?: SortOrder
    validatorId?: SortOrder
    status?: SortOrder
    latency?: SortOrder
    createdAt?: SortOrder
  }

  export type WebsiteTicksMinOrderByAggregateInput = {
    id?: SortOrder
    websiteId?: SortOrder
    validatorId?: SortOrder
    status?: SortOrder
    latency?: SortOrder
    createdAt?: SortOrder
  }

  export type WebsiteTicksSumOrderByAggregateInput = {
    latency?: SortOrder
  }

  export type EnumWebsiteStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WebsiteStatus | EnumWebsiteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WebsiteStatus[] | ListEnumWebsiteStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebsiteStatus[] | ListEnumWebsiteStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWebsiteStatusWithAggregatesFilter<$PrismaModel> | $Enums.WebsiteStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWebsiteStatusFilter<$PrismaModel>
    _max?: NestedEnumWebsiteStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type WebsiteTicksCreateNestedManyWithoutWebsiteInput = {
    create?: XOR<WebsiteTicksCreateWithoutWebsiteInput, WebsiteTicksUncheckedCreateWithoutWebsiteInput> | WebsiteTicksCreateWithoutWebsiteInput[] | WebsiteTicksUncheckedCreateWithoutWebsiteInput[]
    connectOrCreate?: WebsiteTicksCreateOrConnectWithoutWebsiteInput | WebsiteTicksCreateOrConnectWithoutWebsiteInput[]
    createMany?: WebsiteTicksCreateManyWebsiteInputEnvelope
    connect?: WebsiteTicksWhereUniqueInput | WebsiteTicksWhereUniqueInput[]
  }

  export type WebsiteTicksUncheckedCreateNestedManyWithoutWebsiteInput = {
    create?: XOR<WebsiteTicksCreateWithoutWebsiteInput, WebsiteTicksUncheckedCreateWithoutWebsiteInput> | WebsiteTicksCreateWithoutWebsiteInput[] | WebsiteTicksUncheckedCreateWithoutWebsiteInput[]
    connectOrCreate?: WebsiteTicksCreateOrConnectWithoutWebsiteInput | WebsiteTicksCreateOrConnectWithoutWebsiteInput[]
    createMany?: WebsiteTicksCreateManyWebsiteInputEnvelope
    connect?: WebsiteTicksWhereUniqueInput | WebsiteTicksWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type WebsiteTicksUpdateManyWithoutWebsiteNestedInput = {
    create?: XOR<WebsiteTicksCreateWithoutWebsiteInput, WebsiteTicksUncheckedCreateWithoutWebsiteInput> | WebsiteTicksCreateWithoutWebsiteInput[] | WebsiteTicksUncheckedCreateWithoutWebsiteInput[]
    connectOrCreate?: WebsiteTicksCreateOrConnectWithoutWebsiteInput | WebsiteTicksCreateOrConnectWithoutWebsiteInput[]
    upsert?: WebsiteTicksUpsertWithWhereUniqueWithoutWebsiteInput | WebsiteTicksUpsertWithWhereUniqueWithoutWebsiteInput[]
    createMany?: WebsiteTicksCreateManyWebsiteInputEnvelope
    set?: WebsiteTicksWhereUniqueInput | WebsiteTicksWhereUniqueInput[]
    disconnect?: WebsiteTicksWhereUniqueInput | WebsiteTicksWhereUniqueInput[]
    delete?: WebsiteTicksWhereUniqueInput | WebsiteTicksWhereUniqueInput[]
    connect?: WebsiteTicksWhereUniqueInput | WebsiteTicksWhereUniqueInput[]
    update?: WebsiteTicksUpdateWithWhereUniqueWithoutWebsiteInput | WebsiteTicksUpdateWithWhereUniqueWithoutWebsiteInput[]
    updateMany?: WebsiteTicksUpdateManyWithWhereWithoutWebsiteInput | WebsiteTicksUpdateManyWithWhereWithoutWebsiteInput[]
    deleteMany?: WebsiteTicksScalarWhereInput | WebsiteTicksScalarWhereInput[]
  }

  export type WebsiteTicksUncheckedUpdateManyWithoutWebsiteNestedInput = {
    create?: XOR<WebsiteTicksCreateWithoutWebsiteInput, WebsiteTicksUncheckedCreateWithoutWebsiteInput> | WebsiteTicksCreateWithoutWebsiteInput[] | WebsiteTicksUncheckedCreateWithoutWebsiteInput[]
    connectOrCreate?: WebsiteTicksCreateOrConnectWithoutWebsiteInput | WebsiteTicksCreateOrConnectWithoutWebsiteInput[]
    upsert?: WebsiteTicksUpsertWithWhereUniqueWithoutWebsiteInput | WebsiteTicksUpsertWithWhereUniqueWithoutWebsiteInput[]
    createMany?: WebsiteTicksCreateManyWebsiteInputEnvelope
    set?: WebsiteTicksWhereUniqueInput | WebsiteTicksWhereUniqueInput[]
    disconnect?: WebsiteTicksWhereUniqueInput | WebsiteTicksWhereUniqueInput[]
    delete?: WebsiteTicksWhereUniqueInput | WebsiteTicksWhereUniqueInput[]
    connect?: WebsiteTicksWhereUniqueInput | WebsiteTicksWhereUniqueInput[]
    update?: WebsiteTicksUpdateWithWhereUniqueWithoutWebsiteInput | WebsiteTicksUpdateWithWhereUniqueWithoutWebsiteInput[]
    updateMany?: WebsiteTicksUpdateManyWithWhereWithoutWebsiteInput | WebsiteTicksUpdateManyWithWhereWithoutWebsiteInput[]
    deleteMany?: WebsiteTicksScalarWhereInput | WebsiteTicksScalarWhereInput[]
  }

  export type WebsiteTicksCreateNestedManyWithoutValidatorInput = {
    create?: XOR<WebsiteTicksCreateWithoutValidatorInput, WebsiteTicksUncheckedCreateWithoutValidatorInput> | WebsiteTicksCreateWithoutValidatorInput[] | WebsiteTicksUncheckedCreateWithoutValidatorInput[]
    connectOrCreate?: WebsiteTicksCreateOrConnectWithoutValidatorInput | WebsiteTicksCreateOrConnectWithoutValidatorInput[]
    createMany?: WebsiteTicksCreateManyValidatorInputEnvelope
    connect?: WebsiteTicksWhereUniqueInput | WebsiteTicksWhereUniqueInput[]
  }

  export type WebsiteTicksUncheckedCreateNestedManyWithoutValidatorInput = {
    create?: XOR<WebsiteTicksCreateWithoutValidatorInput, WebsiteTicksUncheckedCreateWithoutValidatorInput> | WebsiteTicksCreateWithoutValidatorInput[] | WebsiteTicksUncheckedCreateWithoutValidatorInput[]
    connectOrCreate?: WebsiteTicksCreateOrConnectWithoutValidatorInput | WebsiteTicksCreateOrConnectWithoutValidatorInput[]
    createMany?: WebsiteTicksCreateManyValidatorInputEnvelope
    connect?: WebsiteTicksWhereUniqueInput | WebsiteTicksWhereUniqueInput[]
  }

  export type WebsiteTicksUpdateManyWithoutValidatorNestedInput = {
    create?: XOR<WebsiteTicksCreateWithoutValidatorInput, WebsiteTicksUncheckedCreateWithoutValidatorInput> | WebsiteTicksCreateWithoutValidatorInput[] | WebsiteTicksUncheckedCreateWithoutValidatorInput[]
    connectOrCreate?: WebsiteTicksCreateOrConnectWithoutValidatorInput | WebsiteTicksCreateOrConnectWithoutValidatorInput[]
    upsert?: WebsiteTicksUpsertWithWhereUniqueWithoutValidatorInput | WebsiteTicksUpsertWithWhereUniqueWithoutValidatorInput[]
    createMany?: WebsiteTicksCreateManyValidatorInputEnvelope
    set?: WebsiteTicksWhereUniqueInput | WebsiteTicksWhereUniqueInput[]
    disconnect?: WebsiteTicksWhereUniqueInput | WebsiteTicksWhereUniqueInput[]
    delete?: WebsiteTicksWhereUniqueInput | WebsiteTicksWhereUniqueInput[]
    connect?: WebsiteTicksWhereUniqueInput | WebsiteTicksWhereUniqueInput[]
    update?: WebsiteTicksUpdateWithWhereUniqueWithoutValidatorInput | WebsiteTicksUpdateWithWhereUniqueWithoutValidatorInput[]
    updateMany?: WebsiteTicksUpdateManyWithWhereWithoutValidatorInput | WebsiteTicksUpdateManyWithWhereWithoutValidatorInput[]
    deleteMany?: WebsiteTicksScalarWhereInput | WebsiteTicksScalarWhereInput[]
  }

  export type WebsiteTicksUncheckedUpdateManyWithoutValidatorNestedInput = {
    create?: XOR<WebsiteTicksCreateWithoutValidatorInput, WebsiteTicksUncheckedCreateWithoutValidatorInput> | WebsiteTicksCreateWithoutValidatorInput[] | WebsiteTicksUncheckedCreateWithoutValidatorInput[]
    connectOrCreate?: WebsiteTicksCreateOrConnectWithoutValidatorInput | WebsiteTicksCreateOrConnectWithoutValidatorInput[]
    upsert?: WebsiteTicksUpsertWithWhereUniqueWithoutValidatorInput | WebsiteTicksUpsertWithWhereUniqueWithoutValidatorInput[]
    createMany?: WebsiteTicksCreateManyValidatorInputEnvelope
    set?: WebsiteTicksWhereUniqueInput | WebsiteTicksWhereUniqueInput[]
    disconnect?: WebsiteTicksWhereUniqueInput | WebsiteTicksWhereUniqueInput[]
    delete?: WebsiteTicksWhereUniqueInput | WebsiteTicksWhereUniqueInput[]
    connect?: WebsiteTicksWhereUniqueInput | WebsiteTicksWhereUniqueInput[]
    update?: WebsiteTicksUpdateWithWhereUniqueWithoutValidatorInput | WebsiteTicksUpdateWithWhereUniqueWithoutValidatorInput[]
    updateMany?: WebsiteTicksUpdateManyWithWhereWithoutValidatorInput | WebsiteTicksUpdateManyWithWhereWithoutValidatorInput[]
    deleteMany?: WebsiteTicksScalarWhereInput | WebsiteTicksScalarWhereInput[]
  }

  export type ValidatorsCreateNestedOneWithoutTicksInput = {
    create?: XOR<ValidatorsCreateWithoutTicksInput, ValidatorsUncheckedCreateWithoutTicksInput>
    connectOrCreate?: ValidatorsCreateOrConnectWithoutTicksInput
    connect?: ValidatorsWhereUniqueInput
  }

  export type WebsiteCreateNestedOneWithoutWebsiteTicksInput = {
    create?: XOR<WebsiteCreateWithoutWebsiteTicksInput, WebsiteUncheckedCreateWithoutWebsiteTicksInput>
    connectOrCreate?: WebsiteCreateOrConnectWithoutWebsiteTicksInput
    connect?: WebsiteWhereUniqueInput
  }

  export type EnumWebsiteStatusFieldUpdateOperationsInput = {
    set?: $Enums.WebsiteStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ValidatorsUpdateOneRequiredWithoutTicksNestedInput = {
    create?: XOR<ValidatorsCreateWithoutTicksInput, ValidatorsUncheckedCreateWithoutTicksInput>
    connectOrCreate?: ValidatorsCreateOrConnectWithoutTicksInput
    upsert?: ValidatorsUpsertWithoutTicksInput
    connect?: ValidatorsWhereUniqueInput
    update?: XOR<XOR<ValidatorsUpdateToOneWithWhereWithoutTicksInput, ValidatorsUpdateWithoutTicksInput>, ValidatorsUncheckedUpdateWithoutTicksInput>
  }

  export type WebsiteUpdateOneRequiredWithoutWebsiteTicksNestedInput = {
    create?: XOR<WebsiteCreateWithoutWebsiteTicksInput, WebsiteUncheckedCreateWithoutWebsiteTicksInput>
    connectOrCreate?: WebsiteCreateOrConnectWithoutWebsiteTicksInput
    upsert?: WebsiteUpsertWithoutWebsiteTicksInput
    connect?: WebsiteWhereUniqueInput
    update?: XOR<XOR<WebsiteUpdateToOneWithWhereWithoutWebsiteTicksInput, WebsiteUpdateWithoutWebsiteTicksInput>, WebsiteUncheckedUpdateWithoutWebsiteTicksInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumWebsiteStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WebsiteStatus | EnumWebsiteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WebsiteStatus[] | ListEnumWebsiteStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebsiteStatus[] | ListEnumWebsiteStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWebsiteStatusFilter<$PrismaModel> | $Enums.WebsiteStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumWebsiteStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WebsiteStatus | EnumWebsiteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WebsiteStatus[] | ListEnumWebsiteStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebsiteStatus[] | ListEnumWebsiteStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWebsiteStatusWithAggregatesFilter<$PrismaModel> | $Enums.WebsiteStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWebsiteStatusFilter<$PrismaModel>
    _max?: NestedEnumWebsiteStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type WebsiteTicksCreateWithoutWebsiteInput = {
    id?: string
    status: $Enums.WebsiteStatus
    latency: number
    createdAt?: Date | string
    validator: ValidatorsCreateNestedOneWithoutTicksInput
  }

  export type WebsiteTicksUncheckedCreateWithoutWebsiteInput = {
    id?: string
    validatorId: string
    status: $Enums.WebsiteStatus
    latency: number
    createdAt?: Date | string
  }

  export type WebsiteTicksCreateOrConnectWithoutWebsiteInput = {
    where: WebsiteTicksWhereUniqueInput
    create: XOR<WebsiteTicksCreateWithoutWebsiteInput, WebsiteTicksUncheckedCreateWithoutWebsiteInput>
  }

  export type WebsiteTicksCreateManyWebsiteInputEnvelope = {
    data: WebsiteTicksCreateManyWebsiteInput | WebsiteTicksCreateManyWebsiteInput[]
    skipDuplicates?: boolean
  }

  export type WebsiteTicksUpsertWithWhereUniqueWithoutWebsiteInput = {
    where: WebsiteTicksWhereUniqueInput
    update: XOR<WebsiteTicksUpdateWithoutWebsiteInput, WebsiteTicksUncheckedUpdateWithoutWebsiteInput>
    create: XOR<WebsiteTicksCreateWithoutWebsiteInput, WebsiteTicksUncheckedCreateWithoutWebsiteInput>
  }

  export type WebsiteTicksUpdateWithWhereUniqueWithoutWebsiteInput = {
    where: WebsiteTicksWhereUniqueInput
    data: XOR<WebsiteTicksUpdateWithoutWebsiteInput, WebsiteTicksUncheckedUpdateWithoutWebsiteInput>
  }

  export type WebsiteTicksUpdateManyWithWhereWithoutWebsiteInput = {
    where: WebsiteTicksScalarWhereInput
    data: XOR<WebsiteTicksUpdateManyMutationInput, WebsiteTicksUncheckedUpdateManyWithoutWebsiteInput>
  }

  export type WebsiteTicksScalarWhereInput = {
    AND?: WebsiteTicksScalarWhereInput | WebsiteTicksScalarWhereInput[]
    OR?: WebsiteTicksScalarWhereInput[]
    NOT?: WebsiteTicksScalarWhereInput | WebsiteTicksScalarWhereInput[]
    id?: StringFilter<"WebsiteTicks"> | string
    websiteId?: StringFilter<"WebsiteTicks"> | string
    validatorId?: StringFilter<"WebsiteTicks"> | string
    status?: EnumWebsiteStatusFilter<"WebsiteTicks"> | $Enums.WebsiteStatus
    latency?: FloatFilter<"WebsiteTicks"> | number
    createdAt?: DateTimeFilter<"WebsiteTicks"> | Date | string
  }

  export type WebsiteTicksCreateWithoutValidatorInput = {
    id?: string
    status: $Enums.WebsiteStatus
    latency: number
    createdAt?: Date | string
    website: WebsiteCreateNestedOneWithoutWebsiteTicksInput
  }

  export type WebsiteTicksUncheckedCreateWithoutValidatorInput = {
    id?: string
    websiteId: string
    status: $Enums.WebsiteStatus
    latency: number
    createdAt?: Date | string
  }

  export type WebsiteTicksCreateOrConnectWithoutValidatorInput = {
    where: WebsiteTicksWhereUniqueInput
    create: XOR<WebsiteTicksCreateWithoutValidatorInput, WebsiteTicksUncheckedCreateWithoutValidatorInput>
  }

  export type WebsiteTicksCreateManyValidatorInputEnvelope = {
    data: WebsiteTicksCreateManyValidatorInput | WebsiteTicksCreateManyValidatorInput[]
    skipDuplicates?: boolean
  }

  export type WebsiteTicksUpsertWithWhereUniqueWithoutValidatorInput = {
    where: WebsiteTicksWhereUniqueInput
    update: XOR<WebsiteTicksUpdateWithoutValidatorInput, WebsiteTicksUncheckedUpdateWithoutValidatorInput>
    create: XOR<WebsiteTicksCreateWithoutValidatorInput, WebsiteTicksUncheckedCreateWithoutValidatorInput>
  }

  export type WebsiteTicksUpdateWithWhereUniqueWithoutValidatorInput = {
    where: WebsiteTicksWhereUniqueInput
    data: XOR<WebsiteTicksUpdateWithoutValidatorInput, WebsiteTicksUncheckedUpdateWithoutValidatorInput>
  }

  export type WebsiteTicksUpdateManyWithWhereWithoutValidatorInput = {
    where: WebsiteTicksScalarWhereInput
    data: XOR<WebsiteTicksUpdateManyMutationInput, WebsiteTicksUncheckedUpdateManyWithoutValidatorInput>
  }

  export type ValidatorsCreateWithoutTicksInput = {
    id?: string
    publicKey: string
    location: string
    latency: number
    ipAddress: string
  }

  export type ValidatorsUncheckedCreateWithoutTicksInput = {
    id?: string
    publicKey: string
    location: string
    latency: number
    ipAddress: string
  }

  export type ValidatorsCreateOrConnectWithoutTicksInput = {
    where: ValidatorsWhereUniqueInput
    create: XOR<ValidatorsCreateWithoutTicksInput, ValidatorsUncheckedCreateWithoutTicksInput>
  }

  export type WebsiteCreateWithoutWebsiteTicksInput = {
    id?: string
    url: string
    userId: string
    ticks: number
    disabled?: boolean
  }

  export type WebsiteUncheckedCreateWithoutWebsiteTicksInput = {
    id?: string
    url: string
    userId: string
    ticks: number
    disabled?: boolean
  }

  export type WebsiteCreateOrConnectWithoutWebsiteTicksInput = {
    where: WebsiteWhereUniqueInput
    create: XOR<WebsiteCreateWithoutWebsiteTicksInput, WebsiteUncheckedCreateWithoutWebsiteTicksInput>
  }

  export type ValidatorsUpsertWithoutTicksInput = {
    update: XOR<ValidatorsUpdateWithoutTicksInput, ValidatorsUncheckedUpdateWithoutTicksInput>
    create: XOR<ValidatorsCreateWithoutTicksInput, ValidatorsUncheckedCreateWithoutTicksInput>
    where?: ValidatorsWhereInput
  }

  export type ValidatorsUpdateToOneWithWhereWithoutTicksInput = {
    where?: ValidatorsWhereInput
    data: XOR<ValidatorsUpdateWithoutTicksInput, ValidatorsUncheckedUpdateWithoutTicksInput>
  }

  export type ValidatorsUpdateWithoutTicksInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latency?: FloatFieldUpdateOperationsInput | number
    ipAddress?: StringFieldUpdateOperationsInput | string
  }

  export type ValidatorsUncheckedUpdateWithoutTicksInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latency?: FloatFieldUpdateOperationsInput | number
    ipAddress?: StringFieldUpdateOperationsInput | string
  }

  export type WebsiteUpsertWithoutWebsiteTicksInput = {
    update: XOR<WebsiteUpdateWithoutWebsiteTicksInput, WebsiteUncheckedUpdateWithoutWebsiteTicksInput>
    create: XOR<WebsiteCreateWithoutWebsiteTicksInput, WebsiteUncheckedCreateWithoutWebsiteTicksInput>
    where?: WebsiteWhereInput
  }

  export type WebsiteUpdateToOneWithWhereWithoutWebsiteTicksInput = {
    where?: WebsiteWhereInput
    data: XOR<WebsiteUpdateWithoutWebsiteTicksInput, WebsiteUncheckedUpdateWithoutWebsiteTicksInput>
  }

  export type WebsiteUpdateWithoutWebsiteTicksInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ticks?: FloatFieldUpdateOperationsInput | number
    disabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WebsiteUncheckedUpdateWithoutWebsiteTicksInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ticks?: FloatFieldUpdateOperationsInput | number
    disabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WebsiteTicksCreateManyWebsiteInput = {
    id?: string
    validatorId: string
    status: $Enums.WebsiteStatus
    latency: number
    createdAt?: Date | string
  }

  export type WebsiteTicksUpdateWithoutWebsiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumWebsiteStatusFieldUpdateOperationsInput | $Enums.WebsiteStatus
    latency?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    validator?: ValidatorsUpdateOneRequiredWithoutTicksNestedInput
  }

  export type WebsiteTicksUncheckedUpdateWithoutWebsiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    validatorId?: StringFieldUpdateOperationsInput | string
    status?: EnumWebsiteStatusFieldUpdateOperationsInput | $Enums.WebsiteStatus
    latency?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebsiteTicksUncheckedUpdateManyWithoutWebsiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    validatorId?: StringFieldUpdateOperationsInput | string
    status?: EnumWebsiteStatusFieldUpdateOperationsInput | $Enums.WebsiteStatus
    latency?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebsiteTicksCreateManyValidatorInput = {
    id?: string
    websiteId: string
    status: $Enums.WebsiteStatus
    latency: number
    createdAt?: Date | string
  }

  export type WebsiteTicksUpdateWithoutValidatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumWebsiteStatusFieldUpdateOperationsInput | $Enums.WebsiteStatus
    latency?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    website?: WebsiteUpdateOneRequiredWithoutWebsiteTicksNestedInput
  }

  export type WebsiteTicksUncheckedUpdateWithoutValidatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    websiteId?: StringFieldUpdateOperationsInput | string
    status?: EnumWebsiteStatusFieldUpdateOperationsInput | $Enums.WebsiteStatus
    latency?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebsiteTicksUncheckedUpdateManyWithoutValidatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    websiteId?: StringFieldUpdateOperationsInput | string
    status?: EnumWebsiteStatusFieldUpdateOperationsInput | $Enums.WebsiteStatus
    latency?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}