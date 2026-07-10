
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
 * Model Employee
 * 
 */
export type Employee = $Result.DefaultSelection<Prisma.$EmployeePayload>
/**
 * Model MasterPosition
 * 
 */
export type MasterPosition = $Result.DefaultSelection<Prisma.$MasterPositionPayload>
/**
 * Model Location
 * 
 */
export type Location = $Result.DefaultSelection<Prisma.$LocationPayload>
/**
 * Model EmployeeLocation
 * 
 */
export type EmployeeLocation = $Result.DefaultSelection<Prisma.$EmployeeLocationPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Employees
 * const employees = await prisma.employee.findMany()
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
   * // Fetch zero or more Employees
   * const employees = await prisma.employee.findMany()
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
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.masterPosition`: Exposes CRUD operations for the **MasterPosition** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MasterPositions
    * const masterPositions = await prisma.masterPosition.findMany()
    * ```
    */
  get masterPosition(): Prisma.MasterPositionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.location`: Exposes CRUD operations for the **Location** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.location.findMany()
    * ```
    */
  get location(): Prisma.LocationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employeeLocation`: Exposes CRUD operations for the **EmployeeLocation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmployeeLocations
    * const employeeLocations = await prisma.employeeLocation.findMany()
    * ```
    */
  get employeeLocation(): Prisma.EmployeeLocationDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Employee: 'Employee',
    MasterPosition: 'MasterPosition',
    Location: 'Location',
    EmployeeLocation: 'EmployeeLocation'
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
      modelProps: "employee" | "masterPosition" | "location" | "employeeLocation"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Employee: {
        payload: Prisma.$EmployeePayload<ExtArgs>
        fields: Prisma.EmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findFirst: {
            args: Prisma.EmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findMany: {
            args: Prisma.EmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          create: {
            args: Prisma.EmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          createMany: {
            args: Prisma.EmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          delete: {
            args: Prisma.EmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          update: {
            args: Prisma.EmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          deleteMany: {
            args: Prisma.EmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployeeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          upsert: {
            args: Prisma.EmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployee>
          }
          groupBy: {
            args: Prisma.EmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number
          }
        }
      }
      MasterPosition: {
        payload: Prisma.$MasterPositionPayload<ExtArgs>
        fields: Prisma.MasterPositionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MasterPositionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterPositionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MasterPositionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterPositionPayload>
          }
          findFirst: {
            args: Prisma.MasterPositionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterPositionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MasterPositionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterPositionPayload>
          }
          findMany: {
            args: Prisma.MasterPositionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterPositionPayload>[]
          }
          create: {
            args: Prisma.MasterPositionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterPositionPayload>
          }
          createMany: {
            args: Prisma.MasterPositionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MasterPositionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterPositionPayload>[]
          }
          delete: {
            args: Prisma.MasterPositionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterPositionPayload>
          }
          update: {
            args: Prisma.MasterPositionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterPositionPayload>
          }
          deleteMany: {
            args: Prisma.MasterPositionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MasterPositionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MasterPositionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterPositionPayload>[]
          }
          upsert: {
            args: Prisma.MasterPositionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterPositionPayload>
          }
          aggregate: {
            args: Prisma.MasterPositionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMasterPosition>
          }
          groupBy: {
            args: Prisma.MasterPositionGroupByArgs<ExtArgs>
            result: $Utils.Optional<MasterPositionGroupByOutputType>[]
          }
          count: {
            args: Prisma.MasterPositionCountArgs<ExtArgs>
            result: $Utils.Optional<MasterPositionCountAggregateOutputType> | number
          }
        }
      }
      Location: {
        payload: Prisma.$LocationPayload<ExtArgs>
        fields: Prisma.LocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findFirst: {
            args: Prisma.LocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findMany: {
            args: Prisma.LocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          create: {
            args: Prisma.LocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          createMany: {
            args: Prisma.LocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LocationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          delete: {
            args: Prisma.LocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          update: {
            args: Prisma.LocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          deleteMany: {
            args: Prisma.LocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          upsert: {
            args: Prisma.LocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          aggregate: {
            args: Prisma.LocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocation>
          }
          groupBy: {
            args: Prisma.LocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocationCountArgs<ExtArgs>
            result: $Utils.Optional<LocationCountAggregateOutputType> | number
          }
        }
      }
      EmployeeLocation: {
        payload: Prisma.$EmployeeLocationPayload<ExtArgs>
        fields: Prisma.EmployeeLocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeLocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeLocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeLocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeLocationPayload>
          }
          findFirst: {
            args: Prisma.EmployeeLocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeLocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeLocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeLocationPayload>
          }
          findMany: {
            args: Prisma.EmployeeLocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeLocationPayload>[]
          }
          create: {
            args: Prisma.EmployeeLocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeLocationPayload>
          }
          createMany: {
            args: Prisma.EmployeeLocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeeLocationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeLocationPayload>[]
          }
          delete: {
            args: Prisma.EmployeeLocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeLocationPayload>
          }
          update: {
            args: Prisma.EmployeeLocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeLocationPayload>
          }
          deleteMany: {
            args: Prisma.EmployeeLocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeLocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployeeLocationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeLocationPayload>[]
          }
          upsert: {
            args: Prisma.EmployeeLocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeLocationPayload>
          }
          aggregate: {
            args: Prisma.EmployeeLocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployeeLocation>
          }
          groupBy: {
            args: Prisma.EmployeeLocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeLocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeLocationCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeLocationCountAggregateOutputType> | number
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    employee?: EmployeeOmit
    masterPosition?: MasterPositionOmit
    location?: LocationOmit
    employeeLocation?: EmployeeLocationOmit
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
   * Count Type EmployeeCountOutputType
   */

  export type EmployeeCountOutputType = {
    employeeLocations: number
  }

  export type EmployeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employeeLocations?: boolean | EmployeeCountOutputTypeCountEmployeeLocationsArgs
  }

  // Custom InputTypes
  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCountOutputType
     */
    select?: EmployeeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountEmployeeLocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeLocationWhereInput
  }


  /**
   * Count Type MasterPositionCountOutputType
   */

  export type MasterPositionCountOutputType = {
    employees: number
  }

  export type MasterPositionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | MasterPositionCountOutputTypeCountEmployeesArgs
  }

  // Custom InputTypes
  /**
   * MasterPositionCountOutputType without action
   */
  export type MasterPositionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterPositionCountOutputType
     */
    select?: MasterPositionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MasterPositionCountOutputType without action
   */
  export type MasterPositionCountOutputTypeCountEmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
  }


  /**
   * Count Type LocationCountOutputType
   */

  export type LocationCountOutputType = {
    employeeLocations: number
  }

  export type LocationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employeeLocations?: boolean | LocationCountOutputTypeCountEmployeeLocationsArgs
  }

  // Custom InputTypes
  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationCountOutputType
     */
    select?: LocationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountEmployeeLocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeLocationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    positionId: number | null
  }

  export type EmployeeSumAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
    positionId: bigint | null
  }

  export type EmployeeMinAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
    employeeNo: string | null
    fullName: string | null
    phone: string | null
    photoUrl: string | null
    positionId: bigint | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type EmployeeMaxAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
    employeeNo: string | null
    fullName: string | null
    phone: string | null
    photoUrl: string | null
    positionId: bigint | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type EmployeeCountAggregateOutputType = {
    id: number
    userId: number
    employeeNo: number
    fullName: number
    phone: number
    photoUrl: number
    positionId: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type EmployeeAvgAggregateInputType = {
    id?: true
    userId?: true
    positionId?: true
  }

  export type EmployeeSumAggregateInputType = {
    id?: true
    userId?: true
    positionId?: true
  }

  export type EmployeeMinAggregateInputType = {
    id?: true
    userId?: true
    employeeNo?: true
    fullName?: true
    phone?: true
    photoUrl?: true
    positionId?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type EmployeeMaxAggregateInputType = {
    id?: true
    userId?: true
    employeeNo?: true
    fullName?: true
    phone?: true
    photoUrl?: true
    positionId?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type EmployeeCountAggregateInputType = {
    id?: true
    userId?: true
    employeeNo?: true
    fullName?: true
    phone?: true
    photoUrl?: true
    positionId?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employee to aggregate.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type EmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithAggregationInput | EmployeeOrderByWithAggregationInput[]
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum
    having?: EmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _avg?: EmployeeAvgAggregateInputType
    _sum?: EmployeeSumAggregateInputType
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }

  export type EmployeeGroupByOutputType = {
    id: bigint
    userId: bigint | null
    employeeNo: string
    fullName: string
    phone: string | null
    photoUrl: string | null
    positionId: bigint
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    employeeNo?: boolean
    fullName?: boolean
    phone?: boolean
    photoUrl?: boolean
    positionId?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    position?: boolean | MasterPositionDefaultArgs<ExtArgs>
    employeeLocations?: boolean | Employee$employeeLocationsArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    employeeNo?: boolean
    fullName?: boolean
    phone?: boolean
    photoUrl?: boolean
    positionId?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    position?: boolean | MasterPositionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    employeeNo?: boolean
    fullName?: boolean
    phone?: boolean
    photoUrl?: boolean
    positionId?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    position?: boolean | MasterPositionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectScalar = {
    id?: boolean
    userId?: boolean
    employeeNo?: boolean
    fullName?: boolean
    phone?: boolean
    photoUrl?: boolean
    positionId?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type EmployeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "employeeNo" | "fullName" | "phone" | "photoUrl" | "positionId" | "isDeleted" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["employee"]>
  export type EmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    position?: boolean | MasterPositionDefaultArgs<ExtArgs>
    employeeLocations?: boolean | Employee$employeeLocationsArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmployeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    position?: boolean | MasterPositionDefaultArgs<ExtArgs>
  }
  export type EmployeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    position?: boolean | MasterPositionDefaultArgs<ExtArgs>
  }

  export type $EmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employee"
    objects: {
      position: Prisma.$MasterPositionPayload<ExtArgs>
      employeeLocations: Prisma.$EmployeeLocationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      userId: bigint | null
      employeeNo: string
      fullName: string
      phone: string | null
      photoUrl: string | null
      positionId: bigint
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["employee"]>
    composites: {}
  }

  type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeDefaultArgs> = $Result.GetResult<Prisma.$EmployeePayload, S>

  type EmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface EmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employee'], meta: { name: 'Employee' } }
    /**
     * Find zero or one Employee that matches the filter.
     * @param {EmployeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeFindUniqueArgs>(args: SelectSubset<T, EmployeeFindUniqueArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeFindFirstArgs>(args?: SelectSubset<T, EmployeeFindFirstArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeWithIdOnly = await prisma.employee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployeeFindManyArgs>(args?: SelectSubset<T, EmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employee.
     * @param {EmployeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
     */
    create<T extends EmployeeCreateArgs>(args: SelectSubset<T, EmployeeCreateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees.
     * @param {EmployeeCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeCreateManyArgs>(args?: SelectSubset<T, EmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Employees and returns the data saved in the database.
     * @param {EmployeeCreateManyAndReturnArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeeCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Employee.
     * @param {EmployeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
     */
    delete<T extends EmployeeDeleteArgs>(args: SelectSubset<T, EmployeeDeleteArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employee.
     * @param {EmployeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeUpdateArgs>(args: SelectSubset<T, EmployeeUpdateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees.
     * @param {EmployeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeDeleteManyArgs>(args?: SelectSubset<T, EmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeUpdateManyArgs>(args: SelectSubset<T, EmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees and returns the data updated in the database.
     * @param {EmployeeUpdateManyAndReturnArgs} args - Arguments to update many Employees.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.updateManyAndReturn({
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
    updateManyAndReturn<T extends EmployeeUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Employee.
     * @param {EmployeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeUpsertArgs>(args: SelectSubset<T, EmployeeUpsertArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCountArgs>(
      args?: Subset<T, EmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
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
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employee model
   */
  readonly fields: EmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    position<T extends MasterPositionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MasterPositionDefaultArgs<ExtArgs>>): Prisma__MasterPositionClient<$Result.GetResult<Prisma.$MasterPositionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    employeeLocations<T extends Employee$employeeLocationsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$employeeLocationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeLocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Employee model
   */
  interface EmployeeFieldRefs {
    readonly id: FieldRef<"Employee", 'BigInt'>
    readonly userId: FieldRef<"Employee", 'BigInt'>
    readonly employeeNo: FieldRef<"Employee", 'String'>
    readonly fullName: FieldRef<"Employee", 'String'>
    readonly phone: FieldRef<"Employee", 'String'>
    readonly photoUrl: FieldRef<"Employee", 'String'>
    readonly positionId: FieldRef<"Employee", 'BigInt'>
    readonly isDeleted: FieldRef<"Employee", 'Boolean'>
    readonly createdAt: FieldRef<"Employee", 'DateTime'>
    readonly updatedAt: FieldRef<"Employee", 'DateTime'>
    readonly deletedAt: FieldRef<"Employee", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Employee findUnique
   */
  export type EmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findUniqueOrThrow
   */
  export type EmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findFirst
   */
  export type EmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findFirstOrThrow
   */
  export type EmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findMany
   */
  export type EmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee create
   */
  export type EmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Employee.
     */
    data: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
  }

  /**
   * Employee createMany
   */
  export type EmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employee createManyAndReturn
   */
  export type EmployeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employee update
   */
  export type EmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Employee.
     */
    data: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
    /**
     * Choose, which Employee to update.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee updateMany
   */
  export type EmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employee updateManyAndReturn
   */
  export type EmployeeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employee upsert
   */
  export type EmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Employee to update in case it exists.
     */
    where: EmployeeWhereUniqueInput
    /**
     * In case the Employee found by the `where` argument doesn't exist, create a new Employee with this data.
     */
    create: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
    /**
     * In case the Employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
  }

  /**
   * Employee delete
   */
  export type EmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter which Employee to delete.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee deleteMany
   */
  export type EmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to delete.
     */
    limit?: number
  }

  /**
   * Employee.employeeLocations
   */
  export type Employee$employeeLocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeLocation
     */
    select?: EmployeeLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeLocation
     */
    omit?: EmployeeLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeLocationInclude<ExtArgs> | null
    where?: EmployeeLocationWhereInput
    orderBy?: EmployeeLocationOrderByWithRelationInput | EmployeeLocationOrderByWithRelationInput[]
    cursor?: EmployeeLocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeLocationScalarFieldEnum | EmployeeLocationScalarFieldEnum[]
  }

  /**
   * Employee without action
   */
  export type EmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
  }


  /**
   * Model MasterPosition
   */

  export type AggregateMasterPosition = {
    _count: MasterPositionCountAggregateOutputType | null
    _avg: MasterPositionAvgAggregateOutputType | null
    _sum: MasterPositionSumAggregateOutputType | null
    _min: MasterPositionMinAggregateOutputType | null
    _max: MasterPositionMaxAggregateOutputType | null
  }

  export type MasterPositionAvgAggregateOutputType = {
    id: number | null
    createdBy: number | null
    updatedBy: number | null
  }

  export type MasterPositionSumAggregateOutputType = {
    id: bigint | null
    createdBy: bigint | null
    updatedBy: bigint | null
  }

  export type MasterPositionMinAggregateOutputType = {
    id: bigint | null
    code: string | null
    name: string | null
    createdBy: bigint | null
    updatedBy: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MasterPositionMaxAggregateOutputType = {
    id: bigint | null
    code: string | null
    name: string | null
    createdBy: bigint | null
    updatedBy: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MasterPositionCountAggregateOutputType = {
    id: number
    code: number
    name: number
    createdBy: number
    updatedBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MasterPositionAvgAggregateInputType = {
    id?: true
    createdBy?: true
    updatedBy?: true
  }

  export type MasterPositionSumAggregateInputType = {
    id?: true
    createdBy?: true
    updatedBy?: true
  }

  export type MasterPositionMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MasterPositionMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MasterPositionCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MasterPositionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MasterPosition to aggregate.
     */
    where?: MasterPositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterPositions to fetch.
     */
    orderBy?: MasterPositionOrderByWithRelationInput | MasterPositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MasterPositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterPositions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterPositions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MasterPositions
    **/
    _count?: true | MasterPositionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MasterPositionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MasterPositionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MasterPositionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MasterPositionMaxAggregateInputType
  }

  export type GetMasterPositionAggregateType<T extends MasterPositionAggregateArgs> = {
        [P in keyof T & keyof AggregateMasterPosition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMasterPosition[P]>
      : GetScalarType<T[P], AggregateMasterPosition[P]>
  }




  export type MasterPositionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MasterPositionWhereInput
    orderBy?: MasterPositionOrderByWithAggregationInput | MasterPositionOrderByWithAggregationInput[]
    by: MasterPositionScalarFieldEnum[] | MasterPositionScalarFieldEnum
    having?: MasterPositionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MasterPositionCountAggregateInputType | true
    _avg?: MasterPositionAvgAggregateInputType
    _sum?: MasterPositionSumAggregateInputType
    _min?: MasterPositionMinAggregateInputType
    _max?: MasterPositionMaxAggregateInputType
  }

  export type MasterPositionGroupByOutputType = {
    id: bigint
    code: string
    name: string
    createdBy: bigint | null
    updatedBy: bigint | null
    createdAt: Date
    updatedAt: Date
    _count: MasterPositionCountAggregateOutputType | null
    _avg: MasterPositionAvgAggregateOutputType | null
    _sum: MasterPositionSumAggregateOutputType | null
    _min: MasterPositionMinAggregateOutputType | null
    _max: MasterPositionMaxAggregateOutputType | null
  }

  type GetMasterPositionGroupByPayload<T extends MasterPositionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MasterPositionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MasterPositionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MasterPositionGroupByOutputType[P]>
            : GetScalarType<T[P], MasterPositionGroupByOutputType[P]>
        }
      >
    >


  export type MasterPositionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employees?: boolean | MasterPosition$employeesArgs<ExtArgs>
    _count?: boolean | MasterPositionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["masterPosition"]>

  export type MasterPositionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["masterPosition"]>

  export type MasterPositionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["masterPosition"]>

  export type MasterPositionSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MasterPositionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name" | "createdBy" | "updatedBy" | "createdAt" | "updatedAt", ExtArgs["result"]["masterPosition"]>
  export type MasterPositionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | MasterPosition$employeesArgs<ExtArgs>
    _count?: boolean | MasterPositionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MasterPositionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MasterPositionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MasterPositionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MasterPosition"
    objects: {
      employees: Prisma.$EmployeePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      code: string
      name: string
      createdBy: bigint | null
      updatedBy: bigint | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["masterPosition"]>
    composites: {}
  }

  type MasterPositionGetPayload<S extends boolean | null | undefined | MasterPositionDefaultArgs> = $Result.GetResult<Prisma.$MasterPositionPayload, S>

  type MasterPositionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MasterPositionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MasterPositionCountAggregateInputType | true
    }

  export interface MasterPositionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MasterPosition'], meta: { name: 'MasterPosition' } }
    /**
     * Find zero or one MasterPosition that matches the filter.
     * @param {MasterPositionFindUniqueArgs} args - Arguments to find a MasterPosition
     * @example
     * // Get one MasterPosition
     * const masterPosition = await prisma.masterPosition.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MasterPositionFindUniqueArgs>(args: SelectSubset<T, MasterPositionFindUniqueArgs<ExtArgs>>): Prisma__MasterPositionClient<$Result.GetResult<Prisma.$MasterPositionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MasterPosition that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MasterPositionFindUniqueOrThrowArgs} args - Arguments to find a MasterPosition
     * @example
     * // Get one MasterPosition
     * const masterPosition = await prisma.masterPosition.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MasterPositionFindUniqueOrThrowArgs>(args: SelectSubset<T, MasterPositionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MasterPositionClient<$Result.GetResult<Prisma.$MasterPositionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MasterPosition that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterPositionFindFirstArgs} args - Arguments to find a MasterPosition
     * @example
     * // Get one MasterPosition
     * const masterPosition = await prisma.masterPosition.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MasterPositionFindFirstArgs>(args?: SelectSubset<T, MasterPositionFindFirstArgs<ExtArgs>>): Prisma__MasterPositionClient<$Result.GetResult<Prisma.$MasterPositionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MasterPosition that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterPositionFindFirstOrThrowArgs} args - Arguments to find a MasterPosition
     * @example
     * // Get one MasterPosition
     * const masterPosition = await prisma.masterPosition.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MasterPositionFindFirstOrThrowArgs>(args?: SelectSubset<T, MasterPositionFindFirstOrThrowArgs<ExtArgs>>): Prisma__MasterPositionClient<$Result.GetResult<Prisma.$MasterPositionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MasterPositions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterPositionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MasterPositions
     * const masterPositions = await prisma.masterPosition.findMany()
     * 
     * // Get first 10 MasterPositions
     * const masterPositions = await prisma.masterPosition.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const masterPositionWithIdOnly = await prisma.masterPosition.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MasterPositionFindManyArgs>(args?: SelectSubset<T, MasterPositionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterPositionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MasterPosition.
     * @param {MasterPositionCreateArgs} args - Arguments to create a MasterPosition.
     * @example
     * // Create one MasterPosition
     * const MasterPosition = await prisma.masterPosition.create({
     *   data: {
     *     // ... data to create a MasterPosition
     *   }
     * })
     * 
     */
    create<T extends MasterPositionCreateArgs>(args: SelectSubset<T, MasterPositionCreateArgs<ExtArgs>>): Prisma__MasterPositionClient<$Result.GetResult<Prisma.$MasterPositionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MasterPositions.
     * @param {MasterPositionCreateManyArgs} args - Arguments to create many MasterPositions.
     * @example
     * // Create many MasterPositions
     * const masterPosition = await prisma.masterPosition.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MasterPositionCreateManyArgs>(args?: SelectSubset<T, MasterPositionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MasterPositions and returns the data saved in the database.
     * @param {MasterPositionCreateManyAndReturnArgs} args - Arguments to create many MasterPositions.
     * @example
     * // Create many MasterPositions
     * const masterPosition = await prisma.masterPosition.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MasterPositions and only return the `id`
     * const masterPositionWithIdOnly = await prisma.masterPosition.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MasterPositionCreateManyAndReturnArgs>(args?: SelectSubset<T, MasterPositionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterPositionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MasterPosition.
     * @param {MasterPositionDeleteArgs} args - Arguments to delete one MasterPosition.
     * @example
     * // Delete one MasterPosition
     * const MasterPosition = await prisma.masterPosition.delete({
     *   where: {
     *     // ... filter to delete one MasterPosition
     *   }
     * })
     * 
     */
    delete<T extends MasterPositionDeleteArgs>(args: SelectSubset<T, MasterPositionDeleteArgs<ExtArgs>>): Prisma__MasterPositionClient<$Result.GetResult<Prisma.$MasterPositionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MasterPosition.
     * @param {MasterPositionUpdateArgs} args - Arguments to update one MasterPosition.
     * @example
     * // Update one MasterPosition
     * const masterPosition = await prisma.masterPosition.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MasterPositionUpdateArgs>(args: SelectSubset<T, MasterPositionUpdateArgs<ExtArgs>>): Prisma__MasterPositionClient<$Result.GetResult<Prisma.$MasterPositionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MasterPositions.
     * @param {MasterPositionDeleteManyArgs} args - Arguments to filter MasterPositions to delete.
     * @example
     * // Delete a few MasterPositions
     * const { count } = await prisma.masterPosition.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MasterPositionDeleteManyArgs>(args?: SelectSubset<T, MasterPositionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MasterPositions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterPositionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MasterPositions
     * const masterPosition = await prisma.masterPosition.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MasterPositionUpdateManyArgs>(args: SelectSubset<T, MasterPositionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MasterPositions and returns the data updated in the database.
     * @param {MasterPositionUpdateManyAndReturnArgs} args - Arguments to update many MasterPositions.
     * @example
     * // Update many MasterPositions
     * const masterPosition = await prisma.masterPosition.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MasterPositions and only return the `id`
     * const masterPositionWithIdOnly = await prisma.masterPosition.updateManyAndReturn({
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
    updateManyAndReturn<T extends MasterPositionUpdateManyAndReturnArgs>(args: SelectSubset<T, MasterPositionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterPositionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MasterPosition.
     * @param {MasterPositionUpsertArgs} args - Arguments to update or create a MasterPosition.
     * @example
     * // Update or create a MasterPosition
     * const masterPosition = await prisma.masterPosition.upsert({
     *   create: {
     *     // ... data to create a MasterPosition
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MasterPosition we want to update
     *   }
     * })
     */
    upsert<T extends MasterPositionUpsertArgs>(args: SelectSubset<T, MasterPositionUpsertArgs<ExtArgs>>): Prisma__MasterPositionClient<$Result.GetResult<Prisma.$MasterPositionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MasterPositions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterPositionCountArgs} args - Arguments to filter MasterPositions to count.
     * @example
     * // Count the number of MasterPositions
     * const count = await prisma.masterPosition.count({
     *   where: {
     *     // ... the filter for the MasterPositions we want to count
     *   }
     * })
    **/
    count<T extends MasterPositionCountArgs>(
      args?: Subset<T, MasterPositionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MasterPositionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MasterPosition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterPositionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MasterPositionAggregateArgs>(args: Subset<T, MasterPositionAggregateArgs>): Prisma.PrismaPromise<GetMasterPositionAggregateType<T>>

    /**
     * Group by MasterPosition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterPositionGroupByArgs} args - Group by arguments.
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
      T extends MasterPositionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MasterPositionGroupByArgs['orderBy'] }
        : { orderBy?: MasterPositionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MasterPositionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMasterPositionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MasterPosition model
   */
  readonly fields: MasterPositionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MasterPosition.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MasterPositionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employees<T extends MasterPosition$employeesArgs<ExtArgs> = {}>(args?: Subset<T, MasterPosition$employeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the MasterPosition model
   */
  interface MasterPositionFieldRefs {
    readonly id: FieldRef<"MasterPosition", 'BigInt'>
    readonly code: FieldRef<"MasterPosition", 'String'>
    readonly name: FieldRef<"MasterPosition", 'String'>
    readonly createdBy: FieldRef<"MasterPosition", 'BigInt'>
    readonly updatedBy: FieldRef<"MasterPosition", 'BigInt'>
    readonly createdAt: FieldRef<"MasterPosition", 'DateTime'>
    readonly updatedAt: FieldRef<"MasterPosition", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MasterPosition findUnique
   */
  export type MasterPositionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterPosition
     */
    select?: MasterPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterPosition
     */
    omit?: MasterPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterPositionInclude<ExtArgs> | null
    /**
     * Filter, which MasterPosition to fetch.
     */
    where: MasterPositionWhereUniqueInput
  }

  /**
   * MasterPosition findUniqueOrThrow
   */
  export type MasterPositionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterPosition
     */
    select?: MasterPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterPosition
     */
    omit?: MasterPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterPositionInclude<ExtArgs> | null
    /**
     * Filter, which MasterPosition to fetch.
     */
    where: MasterPositionWhereUniqueInput
  }

  /**
   * MasterPosition findFirst
   */
  export type MasterPositionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterPosition
     */
    select?: MasterPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterPosition
     */
    omit?: MasterPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterPositionInclude<ExtArgs> | null
    /**
     * Filter, which MasterPosition to fetch.
     */
    where?: MasterPositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterPositions to fetch.
     */
    orderBy?: MasterPositionOrderByWithRelationInput | MasterPositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MasterPositions.
     */
    cursor?: MasterPositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterPositions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterPositions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MasterPositions.
     */
    distinct?: MasterPositionScalarFieldEnum | MasterPositionScalarFieldEnum[]
  }

  /**
   * MasterPosition findFirstOrThrow
   */
  export type MasterPositionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterPosition
     */
    select?: MasterPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterPosition
     */
    omit?: MasterPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterPositionInclude<ExtArgs> | null
    /**
     * Filter, which MasterPosition to fetch.
     */
    where?: MasterPositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterPositions to fetch.
     */
    orderBy?: MasterPositionOrderByWithRelationInput | MasterPositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MasterPositions.
     */
    cursor?: MasterPositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterPositions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterPositions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MasterPositions.
     */
    distinct?: MasterPositionScalarFieldEnum | MasterPositionScalarFieldEnum[]
  }

  /**
   * MasterPosition findMany
   */
  export type MasterPositionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterPosition
     */
    select?: MasterPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterPosition
     */
    omit?: MasterPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterPositionInclude<ExtArgs> | null
    /**
     * Filter, which MasterPositions to fetch.
     */
    where?: MasterPositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterPositions to fetch.
     */
    orderBy?: MasterPositionOrderByWithRelationInput | MasterPositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MasterPositions.
     */
    cursor?: MasterPositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterPositions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterPositions.
     */
    skip?: number
    distinct?: MasterPositionScalarFieldEnum | MasterPositionScalarFieldEnum[]
  }

  /**
   * MasterPosition create
   */
  export type MasterPositionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterPosition
     */
    select?: MasterPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterPosition
     */
    omit?: MasterPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterPositionInclude<ExtArgs> | null
    /**
     * The data needed to create a MasterPosition.
     */
    data: XOR<MasterPositionCreateInput, MasterPositionUncheckedCreateInput>
  }

  /**
   * MasterPosition createMany
   */
  export type MasterPositionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MasterPositions.
     */
    data: MasterPositionCreateManyInput | MasterPositionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MasterPosition createManyAndReturn
   */
  export type MasterPositionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterPosition
     */
    select?: MasterPositionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MasterPosition
     */
    omit?: MasterPositionOmit<ExtArgs> | null
    /**
     * The data used to create many MasterPositions.
     */
    data: MasterPositionCreateManyInput | MasterPositionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MasterPosition update
   */
  export type MasterPositionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterPosition
     */
    select?: MasterPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterPosition
     */
    omit?: MasterPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterPositionInclude<ExtArgs> | null
    /**
     * The data needed to update a MasterPosition.
     */
    data: XOR<MasterPositionUpdateInput, MasterPositionUncheckedUpdateInput>
    /**
     * Choose, which MasterPosition to update.
     */
    where: MasterPositionWhereUniqueInput
  }

  /**
   * MasterPosition updateMany
   */
  export type MasterPositionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MasterPositions.
     */
    data: XOR<MasterPositionUpdateManyMutationInput, MasterPositionUncheckedUpdateManyInput>
    /**
     * Filter which MasterPositions to update
     */
    where?: MasterPositionWhereInput
    /**
     * Limit how many MasterPositions to update.
     */
    limit?: number
  }

  /**
   * MasterPosition updateManyAndReturn
   */
  export type MasterPositionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterPosition
     */
    select?: MasterPositionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MasterPosition
     */
    omit?: MasterPositionOmit<ExtArgs> | null
    /**
     * The data used to update MasterPositions.
     */
    data: XOR<MasterPositionUpdateManyMutationInput, MasterPositionUncheckedUpdateManyInput>
    /**
     * Filter which MasterPositions to update
     */
    where?: MasterPositionWhereInput
    /**
     * Limit how many MasterPositions to update.
     */
    limit?: number
  }

  /**
   * MasterPosition upsert
   */
  export type MasterPositionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterPosition
     */
    select?: MasterPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterPosition
     */
    omit?: MasterPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterPositionInclude<ExtArgs> | null
    /**
     * The filter to search for the MasterPosition to update in case it exists.
     */
    where: MasterPositionWhereUniqueInput
    /**
     * In case the MasterPosition found by the `where` argument doesn't exist, create a new MasterPosition with this data.
     */
    create: XOR<MasterPositionCreateInput, MasterPositionUncheckedCreateInput>
    /**
     * In case the MasterPosition was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MasterPositionUpdateInput, MasterPositionUncheckedUpdateInput>
  }

  /**
   * MasterPosition delete
   */
  export type MasterPositionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterPosition
     */
    select?: MasterPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterPosition
     */
    omit?: MasterPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterPositionInclude<ExtArgs> | null
    /**
     * Filter which MasterPosition to delete.
     */
    where: MasterPositionWhereUniqueInput
  }

  /**
   * MasterPosition deleteMany
   */
  export type MasterPositionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MasterPositions to delete
     */
    where?: MasterPositionWhereInput
    /**
     * Limit how many MasterPositions to delete.
     */
    limit?: number
  }

  /**
   * MasterPosition.employees
   */
  export type MasterPosition$employeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    cursor?: EmployeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * MasterPosition without action
   */
  export type MasterPositionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterPosition
     */
    select?: MasterPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterPosition
     */
    omit?: MasterPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterPositionInclude<ExtArgs> | null
  }


  /**
   * Model Location
   */

  export type AggregateLocation = {
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  export type LocationAvgAggregateOutputType = {
    id: number | null
    latitude: Decimal | null
    longitude: Decimal | null
    radius: number | null
    createdBy: number | null
    updatedBy: number | null
  }

  export type LocationSumAggregateOutputType = {
    id: bigint | null
    latitude: Decimal | null
    longitude: Decimal | null
    radius: number | null
    createdBy: bigint | null
    updatedBy: bigint | null
  }

  export type LocationMinAggregateOutputType = {
    id: bigint | null
    locationName: string | null
    address: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    radius: number | null
    createdBy: bigint | null
    updatedBy: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LocationMaxAggregateOutputType = {
    id: bigint | null
    locationName: string | null
    address: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    radius: number | null
    createdBy: bigint | null
    updatedBy: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LocationCountAggregateOutputType = {
    id: number
    locationName: number
    address: number
    latitude: number
    longitude: number
    radius: number
    createdBy: number
    updatedBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LocationAvgAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    radius?: true
    createdBy?: true
    updatedBy?: true
  }

  export type LocationSumAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    radius?: true
    createdBy?: true
    updatedBy?: true
  }

  export type LocationMinAggregateInputType = {
    id?: true
    locationName?: true
    address?: true
    latitude?: true
    longitude?: true
    radius?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LocationMaxAggregateInputType = {
    id?: true
    locationName?: true
    address?: true
    latitude?: true
    longitude?: true
    radius?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LocationCountAggregateInputType = {
    id?: true
    locationName?: true
    address?: true
    latitude?: true
    longitude?: true
    radius?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Location to aggregate.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locations
    **/
    _count?: true | LocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationMaxAggregateInputType
  }

  export type GetLocationAggregateType<T extends LocationAggregateArgs> = {
        [P in keyof T & keyof AggregateLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocation[P]>
      : GetScalarType<T[P], AggregateLocation[P]>
  }




  export type LocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithAggregationInput | LocationOrderByWithAggregationInput[]
    by: LocationScalarFieldEnum[] | LocationScalarFieldEnum
    having?: LocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationCountAggregateInputType | true
    _avg?: LocationAvgAggregateInputType
    _sum?: LocationSumAggregateInputType
    _min?: LocationMinAggregateInputType
    _max?: LocationMaxAggregateInputType
  }

  export type LocationGroupByOutputType = {
    id: bigint
    locationName: string
    address: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    radius: number
    createdBy: bigint | null
    updatedBy: bigint | null
    createdAt: Date
    updatedAt: Date
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  type GetLocationGroupByPayload<T extends LocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationGroupByOutputType[P]>
            : GetScalarType<T[P], LocationGroupByOutputType[P]>
        }
      >
    >


  export type LocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locationName?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    radius?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employeeLocations?: boolean | Location$employeeLocationsArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>

  export type LocationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locationName?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    radius?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["location"]>

  export type LocationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locationName?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    radius?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["location"]>

  export type LocationSelectScalar = {
    id?: boolean
    locationName?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    radius?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "locationName" | "address" | "latitude" | "longitude" | "radius" | "createdBy" | "updatedBy" | "createdAt" | "updatedAt", ExtArgs["result"]["location"]>
  export type LocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employeeLocations?: boolean | Location$employeeLocationsArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LocationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LocationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Location"
    objects: {
      employeeLocations: Prisma.$EmployeeLocationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      locationName: string
      address: string | null
      latitude: Prisma.Decimal | null
      longitude: Prisma.Decimal | null
      radius: number
      createdBy: bigint | null
      updatedBy: bigint | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["location"]>
    composites: {}
  }

  type LocationGetPayload<S extends boolean | null | undefined | LocationDefaultArgs> = $Result.GetResult<Prisma.$LocationPayload, S>

  type LocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocationCountAggregateInputType | true
    }

  export interface LocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Location'], meta: { name: 'Location' } }
    /**
     * Find zero or one Location that matches the filter.
     * @param {LocationFindUniqueArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocationFindUniqueArgs>(args: SelectSubset<T, LocationFindUniqueArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Location that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocationFindUniqueOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocationFindUniqueOrThrowArgs>(args: SelectSubset<T, LocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocationFindFirstArgs>(args?: SelectSubset<T, LocationFindFirstArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocationFindFirstOrThrowArgs>(args?: SelectSubset<T, LocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.location.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.location.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationWithIdOnly = await prisma.location.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocationFindManyArgs>(args?: SelectSubset<T, LocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Location.
     * @param {LocationCreateArgs} args - Arguments to create a Location.
     * @example
     * // Create one Location
     * const Location = await prisma.location.create({
     *   data: {
     *     // ... data to create a Location
     *   }
     * })
     * 
     */
    create<T extends LocationCreateArgs>(args: SelectSubset<T, LocationCreateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Locations.
     * @param {LocationCreateManyArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocationCreateManyArgs>(args?: SelectSubset<T, LocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Locations and returns the data saved in the database.
     * @param {LocationCreateManyAndReturnArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LocationCreateManyAndReturnArgs>(args?: SelectSubset<T, LocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Location.
     * @param {LocationDeleteArgs} args - Arguments to delete one Location.
     * @example
     * // Delete one Location
     * const Location = await prisma.location.delete({
     *   where: {
     *     // ... filter to delete one Location
     *   }
     * })
     * 
     */
    delete<T extends LocationDeleteArgs>(args: SelectSubset<T, LocationDeleteArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Location.
     * @param {LocationUpdateArgs} args - Arguments to update one Location.
     * @example
     * // Update one Location
     * const location = await prisma.location.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocationUpdateArgs>(args: SelectSubset<T, LocationUpdateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Locations.
     * @param {LocationDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.location.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocationDeleteManyArgs>(args?: SelectSubset<T, LocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocationUpdateManyArgs>(args: SelectSubset<T, LocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations and returns the data updated in the database.
     * @param {LocationUpdateManyAndReturnArgs} args - Arguments to update many Locations.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.updateManyAndReturn({
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
    updateManyAndReturn<T extends LocationUpdateManyAndReturnArgs>(args: SelectSubset<T, LocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Location.
     * @param {LocationUpsertArgs} args - Arguments to update or create a Location.
     * @example
     * // Update or create a Location
     * const location = await prisma.location.upsert({
     *   create: {
     *     // ... data to create a Location
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Location we want to update
     *   }
     * })
     */
    upsert<T extends LocationUpsertArgs>(args: SelectSubset<T, LocationUpsertArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.location.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends LocationCountArgs>(
      args?: Subset<T, LocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LocationAggregateArgs>(args: Subset<T, LocationAggregateArgs>): Prisma.PrismaPromise<GetLocationAggregateType<T>>

    /**
     * Group by Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationGroupByArgs} args - Group by arguments.
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
      T extends LocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationGroupByArgs['orderBy'] }
        : { orderBy?: LocationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Location model
   */
  readonly fields: LocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Location.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employeeLocations<T extends Location$employeeLocationsArgs<ExtArgs> = {}>(args?: Subset<T, Location$employeeLocationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeLocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Location model
   */
  interface LocationFieldRefs {
    readonly id: FieldRef<"Location", 'BigInt'>
    readonly locationName: FieldRef<"Location", 'String'>
    readonly address: FieldRef<"Location", 'String'>
    readonly latitude: FieldRef<"Location", 'Decimal'>
    readonly longitude: FieldRef<"Location", 'Decimal'>
    readonly radius: FieldRef<"Location", 'Int'>
    readonly createdBy: FieldRef<"Location", 'BigInt'>
    readonly updatedBy: FieldRef<"Location", 'BigInt'>
    readonly createdAt: FieldRef<"Location", 'DateTime'>
    readonly updatedAt: FieldRef<"Location", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Location findUnique
   */
  export type LocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findUniqueOrThrow
   */
  export type LocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findFirst
   */
  export type LocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findFirstOrThrow
   */
  export type LocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findMany
   */
  export type LocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location create
   */
  export type LocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to create a Location.
     */
    data: XOR<LocationCreateInput, LocationUncheckedCreateInput>
  }

  /**
   * Location createMany
   */
  export type LocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Location createManyAndReturn
   */
  export type LocationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Location update
   */
  export type LocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to update a Location.
     */
    data: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
    /**
     * Choose, which Location to update.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location updateMany
   */
  export type LocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location updateManyAndReturn
   */
  export type LocationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location upsert
   */
  export type LocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The filter to search for the Location to update in case it exists.
     */
    where: LocationWhereUniqueInput
    /**
     * In case the Location found by the `where` argument doesn't exist, create a new Location with this data.
     */
    create: XOR<LocationCreateInput, LocationUncheckedCreateInput>
    /**
     * In case the Location was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
  }

  /**
   * Location delete
   */
  export type LocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter which Location to delete.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location deleteMany
   */
  export type LocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locations to delete
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to delete.
     */
    limit?: number
  }

  /**
   * Location.employeeLocations
   */
  export type Location$employeeLocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeLocation
     */
    select?: EmployeeLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeLocation
     */
    omit?: EmployeeLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeLocationInclude<ExtArgs> | null
    where?: EmployeeLocationWhereInput
    orderBy?: EmployeeLocationOrderByWithRelationInput | EmployeeLocationOrderByWithRelationInput[]
    cursor?: EmployeeLocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeLocationScalarFieldEnum | EmployeeLocationScalarFieldEnum[]
  }

  /**
   * Location without action
   */
  export type LocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
  }


  /**
   * Model EmployeeLocation
   */

  export type AggregateEmployeeLocation = {
    _count: EmployeeLocationCountAggregateOutputType | null
    _avg: EmployeeLocationAvgAggregateOutputType | null
    _sum: EmployeeLocationSumAggregateOutputType | null
    _min: EmployeeLocationMinAggregateOutputType | null
    _max: EmployeeLocationMaxAggregateOutputType | null
  }

  export type EmployeeLocationAvgAggregateOutputType = {
    id: number | null
    employeeId: number | null
    locationId: number | null
  }

  export type EmployeeLocationSumAggregateOutputType = {
    id: bigint | null
    employeeId: bigint | null
    locationId: bigint | null
  }

  export type EmployeeLocationMinAggregateOutputType = {
    id: bigint | null
    employeeId: bigint | null
    locationId: bigint | null
    isDefault: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeLocationMaxAggregateOutputType = {
    id: bigint | null
    employeeId: bigint | null
    locationId: bigint | null
    isDefault: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeLocationCountAggregateOutputType = {
    id: number
    employeeId: number
    locationId: number
    isDefault: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmployeeLocationAvgAggregateInputType = {
    id?: true
    employeeId?: true
    locationId?: true
  }

  export type EmployeeLocationSumAggregateInputType = {
    id?: true
    employeeId?: true
    locationId?: true
  }

  export type EmployeeLocationMinAggregateInputType = {
    id?: true
    employeeId?: true
    locationId?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeLocationMaxAggregateInputType = {
    id?: true
    employeeId?: true
    locationId?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeLocationCountAggregateInputType = {
    id?: true
    employeeId?: true
    locationId?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmployeeLocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmployeeLocation to aggregate.
     */
    where?: EmployeeLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeLocations to fetch.
     */
    orderBy?: EmployeeLocationOrderByWithRelationInput | EmployeeLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmployeeLocations
    **/
    _count?: true | EmployeeLocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeLocationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeLocationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeLocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeLocationMaxAggregateInputType
  }

  export type GetEmployeeLocationAggregateType<T extends EmployeeLocationAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployeeLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployeeLocation[P]>
      : GetScalarType<T[P], AggregateEmployeeLocation[P]>
  }




  export type EmployeeLocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeLocationWhereInput
    orderBy?: EmployeeLocationOrderByWithAggregationInput | EmployeeLocationOrderByWithAggregationInput[]
    by: EmployeeLocationScalarFieldEnum[] | EmployeeLocationScalarFieldEnum
    having?: EmployeeLocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeLocationCountAggregateInputType | true
    _avg?: EmployeeLocationAvgAggregateInputType
    _sum?: EmployeeLocationSumAggregateInputType
    _min?: EmployeeLocationMinAggregateInputType
    _max?: EmployeeLocationMaxAggregateInputType
  }

  export type EmployeeLocationGroupByOutputType = {
    id: bigint
    employeeId: bigint
    locationId: bigint
    isDefault: boolean
    createdAt: Date
    updatedAt: Date
    _count: EmployeeLocationCountAggregateOutputType | null
    _avg: EmployeeLocationAvgAggregateOutputType | null
    _sum: EmployeeLocationSumAggregateOutputType | null
    _min: EmployeeLocationMinAggregateOutputType | null
    _max: EmployeeLocationMaxAggregateOutputType | null
  }

  type GetEmployeeLocationGroupByPayload<T extends EmployeeLocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeLocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeLocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeLocationGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeLocationGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeLocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    locationId?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employeeLocation"]>

  export type EmployeeLocationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    locationId?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employeeLocation"]>

  export type EmployeeLocationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    locationId?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employeeLocation"]>

  export type EmployeeLocationSelectScalar = {
    id?: boolean
    employeeId?: boolean
    locationId?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EmployeeLocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employeeId" | "locationId" | "isDefault" | "createdAt" | "updatedAt", ExtArgs["result"]["employeeLocation"]>
  export type EmployeeLocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }
  export type EmployeeLocationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }
  export type EmployeeLocationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }

  export type $EmployeeLocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmployeeLocation"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs>
      location: Prisma.$LocationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      employeeId: bigint
      locationId: bigint
      isDefault: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["employeeLocation"]>
    composites: {}
  }

  type EmployeeLocationGetPayload<S extends boolean | null | undefined | EmployeeLocationDefaultArgs> = $Result.GetResult<Prisma.$EmployeeLocationPayload, S>

  type EmployeeLocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeLocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeLocationCountAggregateInputType | true
    }

  export interface EmployeeLocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmployeeLocation'], meta: { name: 'EmployeeLocation' } }
    /**
     * Find zero or one EmployeeLocation that matches the filter.
     * @param {EmployeeLocationFindUniqueArgs} args - Arguments to find a EmployeeLocation
     * @example
     * // Get one EmployeeLocation
     * const employeeLocation = await prisma.employeeLocation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeLocationFindUniqueArgs>(args: SelectSubset<T, EmployeeLocationFindUniqueArgs<ExtArgs>>): Prisma__EmployeeLocationClient<$Result.GetResult<Prisma.$EmployeeLocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmployeeLocation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeLocationFindUniqueOrThrowArgs} args - Arguments to find a EmployeeLocation
     * @example
     * // Get one EmployeeLocation
     * const employeeLocation = await prisma.employeeLocation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeLocationFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeLocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeLocationClient<$Result.GetResult<Prisma.$EmployeeLocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmployeeLocation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeLocationFindFirstArgs} args - Arguments to find a EmployeeLocation
     * @example
     * // Get one EmployeeLocation
     * const employeeLocation = await prisma.employeeLocation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeLocationFindFirstArgs>(args?: SelectSubset<T, EmployeeLocationFindFirstArgs<ExtArgs>>): Prisma__EmployeeLocationClient<$Result.GetResult<Prisma.$EmployeeLocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmployeeLocation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeLocationFindFirstOrThrowArgs} args - Arguments to find a EmployeeLocation
     * @example
     * // Get one EmployeeLocation
     * const employeeLocation = await prisma.employeeLocation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeLocationFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeLocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeLocationClient<$Result.GetResult<Prisma.$EmployeeLocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmployeeLocations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeLocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmployeeLocations
     * const employeeLocations = await prisma.employeeLocation.findMany()
     * 
     * // Get first 10 EmployeeLocations
     * const employeeLocations = await prisma.employeeLocation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeLocationWithIdOnly = await prisma.employeeLocation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployeeLocationFindManyArgs>(args?: SelectSubset<T, EmployeeLocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeLocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmployeeLocation.
     * @param {EmployeeLocationCreateArgs} args - Arguments to create a EmployeeLocation.
     * @example
     * // Create one EmployeeLocation
     * const EmployeeLocation = await prisma.employeeLocation.create({
     *   data: {
     *     // ... data to create a EmployeeLocation
     *   }
     * })
     * 
     */
    create<T extends EmployeeLocationCreateArgs>(args: SelectSubset<T, EmployeeLocationCreateArgs<ExtArgs>>): Prisma__EmployeeLocationClient<$Result.GetResult<Prisma.$EmployeeLocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmployeeLocations.
     * @param {EmployeeLocationCreateManyArgs} args - Arguments to create many EmployeeLocations.
     * @example
     * // Create many EmployeeLocations
     * const employeeLocation = await prisma.employeeLocation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeLocationCreateManyArgs>(args?: SelectSubset<T, EmployeeLocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmployeeLocations and returns the data saved in the database.
     * @param {EmployeeLocationCreateManyAndReturnArgs} args - Arguments to create many EmployeeLocations.
     * @example
     * // Create many EmployeeLocations
     * const employeeLocation = await prisma.employeeLocation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmployeeLocations and only return the `id`
     * const employeeLocationWithIdOnly = await prisma.employeeLocation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeeLocationCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeeLocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeLocationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmployeeLocation.
     * @param {EmployeeLocationDeleteArgs} args - Arguments to delete one EmployeeLocation.
     * @example
     * // Delete one EmployeeLocation
     * const EmployeeLocation = await prisma.employeeLocation.delete({
     *   where: {
     *     // ... filter to delete one EmployeeLocation
     *   }
     * })
     * 
     */
    delete<T extends EmployeeLocationDeleteArgs>(args: SelectSubset<T, EmployeeLocationDeleteArgs<ExtArgs>>): Prisma__EmployeeLocationClient<$Result.GetResult<Prisma.$EmployeeLocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmployeeLocation.
     * @param {EmployeeLocationUpdateArgs} args - Arguments to update one EmployeeLocation.
     * @example
     * // Update one EmployeeLocation
     * const employeeLocation = await prisma.employeeLocation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeLocationUpdateArgs>(args: SelectSubset<T, EmployeeLocationUpdateArgs<ExtArgs>>): Prisma__EmployeeLocationClient<$Result.GetResult<Prisma.$EmployeeLocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmployeeLocations.
     * @param {EmployeeLocationDeleteManyArgs} args - Arguments to filter EmployeeLocations to delete.
     * @example
     * // Delete a few EmployeeLocations
     * const { count } = await prisma.employeeLocation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeLocationDeleteManyArgs>(args?: SelectSubset<T, EmployeeLocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmployeeLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeLocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmployeeLocations
     * const employeeLocation = await prisma.employeeLocation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeLocationUpdateManyArgs>(args: SelectSubset<T, EmployeeLocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmployeeLocations and returns the data updated in the database.
     * @param {EmployeeLocationUpdateManyAndReturnArgs} args - Arguments to update many EmployeeLocations.
     * @example
     * // Update many EmployeeLocations
     * const employeeLocation = await prisma.employeeLocation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmployeeLocations and only return the `id`
     * const employeeLocationWithIdOnly = await prisma.employeeLocation.updateManyAndReturn({
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
    updateManyAndReturn<T extends EmployeeLocationUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployeeLocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeLocationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmployeeLocation.
     * @param {EmployeeLocationUpsertArgs} args - Arguments to update or create a EmployeeLocation.
     * @example
     * // Update or create a EmployeeLocation
     * const employeeLocation = await prisma.employeeLocation.upsert({
     *   create: {
     *     // ... data to create a EmployeeLocation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmployeeLocation we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeLocationUpsertArgs>(args: SelectSubset<T, EmployeeLocationUpsertArgs<ExtArgs>>): Prisma__EmployeeLocationClient<$Result.GetResult<Prisma.$EmployeeLocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmployeeLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeLocationCountArgs} args - Arguments to filter EmployeeLocations to count.
     * @example
     * // Count the number of EmployeeLocations
     * const count = await prisma.employeeLocation.count({
     *   where: {
     *     // ... the filter for the EmployeeLocations we want to count
     *   }
     * })
    **/
    count<T extends EmployeeLocationCountArgs>(
      args?: Subset<T, EmployeeLocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeLocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmployeeLocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeLocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeeLocationAggregateArgs>(args: Subset<T, EmployeeLocationAggregateArgs>): Prisma.PrismaPromise<GetEmployeeLocationAggregateType<T>>

    /**
     * Group by EmployeeLocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeLocationGroupByArgs} args - Group by arguments.
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
      T extends EmployeeLocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeLocationGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeLocationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmployeeLocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmployeeLocation model
   */
  readonly fields: EmployeeLocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmployeeLocation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeLocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    location<T extends LocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocationDefaultArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EmployeeLocation model
   */
  interface EmployeeLocationFieldRefs {
    readonly id: FieldRef<"EmployeeLocation", 'BigInt'>
    readonly employeeId: FieldRef<"EmployeeLocation", 'BigInt'>
    readonly locationId: FieldRef<"EmployeeLocation", 'BigInt'>
    readonly isDefault: FieldRef<"EmployeeLocation", 'Boolean'>
    readonly createdAt: FieldRef<"EmployeeLocation", 'DateTime'>
    readonly updatedAt: FieldRef<"EmployeeLocation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EmployeeLocation findUnique
   */
  export type EmployeeLocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeLocation
     */
    select?: EmployeeLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeLocation
     */
    omit?: EmployeeLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeLocationInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeLocation to fetch.
     */
    where: EmployeeLocationWhereUniqueInput
  }

  /**
   * EmployeeLocation findUniqueOrThrow
   */
  export type EmployeeLocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeLocation
     */
    select?: EmployeeLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeLocation
     */
    omit?: EmployeeLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeLocationInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeLocation to fetch.
     */
    where: EmployeeLocationWhereUniqueInput
  }

  /**
   * EmployeeLocation findFirst
   */
  export type EmployeeLocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeLocation
     */
    select?: EmployeeLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeLocation
     */
    omit?: EmployeeLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeLocationInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeLocation to fetch.
     */
    where?: EmployeeLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeLocations to fetch.
     */
    orderBy?: EmployeeLocationOrderByWithRelationInput | EmployeeLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmployeeLocations.
     */
    cursor?: EmployeeLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmployeeLocations.
     */
    distinct?: EmployeeLocationScalarFieldEnum | EmployeeLocationScalarFieldEnum[]
  }

  /**
   * EmployeeLocation findFirstOrThrow
   */
  export type EmployeeLocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeLocation
     */
    select?: EmployeeLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeLocation
     */
    omit?: EmployeeLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeLocationInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeLocation to fetch.
     */
    where?: EmployeeLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeLocations to fetch.
     */
    orderBy?: EmployeeLocationOrderByWithRelationInput | EmployeeLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmployeeLocations.
     */
    cursor?: EmployeeLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmployeeLocations.
     */
    distinct?: EmployeeLocationScalarFieldEnum | EmployeeLocationScalarFieldEnum[]
  }

  /**
   * EmployeeLocation findMany
   */
  export type EmployeeLocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeLocation
     */
    select?: EmployeeLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeLocation
     */
    omit?: EmployeeLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeLocationInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeLocations to fetch.
     */
    where?: EmployeeLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeLocations to fetch.
     */
    orderBy?: EmployeeLocationOrderByWithRelationInput | EmployeeLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmployeeLocations.
     */
    cursor?: EmployeeLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeLocations.
     */
    skip?: number
    distinct?: EmployeeLocationScalarFieldEnum | EmployeeLocationScalarFieldEnum[]
  }

  /**
   * EmployeeLocation create
   */
  export type EmployeeLocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeLocation
     */
    select?: EmployeeLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeLocation
     */
    omit?: EmployeeLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeLocationInclude<ExtArgs> | null
    /**
     * The data needed to create a EmployeeLocation.
     */
    data: XOR<EmployeeLocationCreateInput, EmployeeLocationUncheckedCreateInput>
  }

  /**
   * EmployeeLocation createMany
   */
  export type EmployeeLocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmployeeLocations.
     */
    data: EmployeeLocationCreateManyInput | EmployeeLocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmployeeLocation createManyAndReturn
   */
  export type EmployeeLocationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeLocation
     */
    select?: EmployeeLocationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeLocation
     */
    omit?: EmployeeLocationOmit<ExtArgs> | null
    /**
     * The data used to create many EmployeeLocations.
     */
    data: EmployeeLocationCreateManyInput | EmployeeLocationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeLocationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmployeeLocation update
   */
  export type EmployeeLocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeLocation
     */
    select?: EmployeeLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeLocation
     */
    omit?: EmployeeLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeLocationInclude<ExtArgs> | null
    /**
     * The data needed to update a EmployeeLocation.
     */
    data: XOR<EmployeeLocationUpdateInput, EmployeeLocationUncheckedUpdateInput>
    /**
     * Choose, which EmployeeLocation to update.
     */
    where: EmployeeLocationWhereUniqueInput
  }

  /**
   * EmployeeLocation updateMany
   */
  export type EmployeeLocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmployeeLocations.
     */
    data: XOR<EmployeeLocationUpdateManyMutationInput, EmployeeLocationUncheckedUpdateManyInput>
    /**
     * Filter which EmployeeLocations to update
     */
    where?: EmployeeLocationWhereInput
    /**
     * Limit how many EmployeeLocations to update.
     */
    limit?: number
  }

  /**
   * EmployeeLocation updateManyAndReturn
   */
  export type EmployeeLocationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeLocation
     */
    select?: EmployeeLocationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeLocation
     */
    omit?: EmployeeLocationOmit<ExtArgs> | null
    /**
     * The data used to update EmployeeLocations.
     */
    data: XOR<EmployeeLocationUpdateManyMutationInput, EmployeeLocationUncheckedUpdateManyInput>
    /**
     * Filter which EmployeeLocations to update
     */
    where?: EmployeeLocationWhereInput
    /**
     * Limit how many EmployeeLocations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeLocationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmployeeLocation upsert
   */
  export type EmployeeLocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeLocation
     */
    select?: EmployeeLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeLocation
     */
    omit?: EmployeeLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeLocationInclude<ExtArgs> | null
    /**
     * The filter to search for the EmployeeLocation to update in case it exists.
     */
    where: EmployeeLocationWhereUniqueInput
    /**
     * In case the EmployeeLocation found by the `where` argument doesn't exist, create a new EmployeeLocation with this data.
     */
    create: XOR<EmployeeLocationCreateInput, EmployeeLocationUncheckedCreateInput>
    /**
     * In case the EmployeeLocation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeLocationUpdateInput, EmployeeLocationUncheckedUpdateInput>
  }

  /**
   * EmployeeLocation delete
   */
  export type EmployeeLocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeLocation
     */
    select?: EmployeeLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeLocation
     */
    omit?: EmployeeLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeLocationInclude<ExtArgs> | null
    /**
     * Filter which EmployeeLocation to delete.
     */
    where: EmployeeLocationWhereUniqueInput
  }

  /**
   * EmployeeLocation deleteMany
   */
  export type EmployeeLocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmployeeLocations to delete
     */
    where?: EmployeeLocationWhereInput
    /**
     * Limit how many EmployeeLocations to delete.
     */
    limit?: number
  }

  /**
   * EmployeeLocation without action
   */
  export type EmployeeLocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeLocation
     */
    select?: EmployeeLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeLocation
     */
    omit?: EmployeeLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeLocationInclude<ExtArgs> | null
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


  export const EmployeeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    employeeNo: 'employeeNo',
    fullName: 'fullName',
    phone: 'phone',
    photoUrl: 'photoUrl',
    positionId: 'positionId',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const MasterPositionScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    createdBy: 'createdBy',
    updatedBy: 'updatedBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MasterPositionScalarFieldEnum = (typeof MasterPositionScalarFieldEnum)[keyof typeof MasterPositionScalarFieldEnum]


  export const LocationScalarFieldEnum: {
    id: 'id',
    locationName: 'locationName',
    address: 'address',
    latitude: 'latitude',
    longitude: 'longitude',
    radius: 'radius',
    createdBy: 'createdBy',
    updatedBy: 'updatedBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LocationScalarFieldEnum = (typeof LocationScalarFieldEnum)[keyof typeof LocationScalarFieldEnum]


  export const EmployeeLocationScalarFieldEnum: {
    id: 'id',
    employeeId: 'employeeId',
    locationId: 'locationId',
    isDefault: 'isDefault',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmployeeLocationScalarFieldEnum = (typeof EmployeeLocationScalarFieldEnum)[keyof typeof EmployeeLocationScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type EmployeeWhereInput = {
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    id?: BigIntFilter<"Employee"> | bigint | number
    userId?: BigIntNullableFilter<"Employee"> | bigint | number | null
    employeeNo?: StringFilter<"Employee"> | string
    fullName?: StringFilter<"Employee"> | string
    phone?: StringNullableFilter<"Employee"> | string | null
    photoUrl?: StringNullableFilter<"Employee"> | string | null
    positionId?: BigIntFilter<"Employee"> | bigint | number
    isDeleted?: BoolFilter<"Employee"> | boolean
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Employee"> | Date | string | null
    position?: XOR<MasterPositionScalarRelationFilter, MasterPositionWhereInput>
    employeeLocations?: EmployeeLocationListRelationFilter
  }

  export type EmployeeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    employeeNo?: SortOrder
    fullName?: SortOrder
    phone?: SortOrderInput | SortOrder
    photoUrl?: SortOrderInput | SortOrder
    positionId?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    position?: MasterPositionOrderByWithRelationInput
    employeeLocations?: EmployeeLocationOrderByRelationAggregateInput
  }

  export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    employeeNo?: string
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    userId?: BigIntNullableFilter<"Employee"> | bigint | number | null
    fullName?: StringFilter<"Employee"> | string
    phone?: StringNullableFilter<"Employee"> | string | null
    photoUrl?: StringNullableFilter<"Employee"> | string | null
    positionId?: BigIntFilter<"Employee"> | bigint | number
    isDeleted?: BoolFilter<"Employee"> | boolean
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Employee"> | Date | string | null
    position?: XOR<MasterPositionScalarRelationFilter, MasterPositionWhereInput>
    employeeLocations?: EmployeeLocationListRelationFilter
  }, "id" | "employeeNo">

  export type EmployeeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    employeeNo?: SortOrder
    fullName?: SortOrder
    phone?: SortOrderInput | SortOrder
    photoUrl?: SortOrderInput | SortOrder
    positionId?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: EmployeeCountOrderByAggregateInput
    _avg?: EmployeeAvgOrderByAggregateInput
    _max?: EmployeeMaxOrderByAggregateInput
    _min?: EmployeeMinOrderByAggregateInput
    _sum?: EmployeeSumOrderByAggregateInput
  }

  export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    OR?: EmployeeScalarWhereWithAggregatesInput[]
    NOT?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Employee"> | bigint | number
    userId?: BigIntNullableWithAggregatesFilter<"Employee"> | bigint | number | null
    employeeNo?: StringWithAggregatesFilter<"Employee"> | string
    fullName?: StringWithAggregatesFilter<"Employee"> | string
    phone?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    photoUrl?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    positionId?: BigIntWithAggregatesFilter<"Employee"> | bigint | number
    isDeleted?: BoolWithAggregatesFilter<"Employee"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Employee"> | Date | string | null
  }

  export type MasterPositionWhereInput = {
    AND?: MasterPositionWhereInput | MasterPositionWhereInput[]
    OR?: MasterPositionWhereInput[]
    NOT?: MasterPositionWhereInput | MasterPositionWhereInput[]
    id?: BigIntFilter<"MasterPosition"> | bigint | number
    code?: StringFilter<"MasterPosition"> | string
    name?: StringFilter<"MasterPosition"> | string
    createdBy?: BigIntNullableFilter<"MasterPosition"> | bigint | number | null
    updatedBy?: BigIntNullableFilter<"MasterPosition"> | bigint | number | null
    createdAt?: DateTimeFilter<"MasterPosition"> | Date | string
    updatedAt?: DateTimeFilter<"MasterPosition"> | Date | string
    employees?: EmployeeListRelationFilter
  }

  export type MasterPositionOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    employees?: EmployeeOrderByRelationAggregateInput
  }

  export type MasterPositionWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    code?: string
    AND?: MasterPositionWhereInput | MasterPositionWhereInput[]
    OR?: MasterPositionWhereInput[]
    NOT?: MasterPositionWhereInput | MasterPositionWhereInput[]
    name?: StringFilter<"MasterPosition"> | string
    createdBy?: BigIntNullableFilter<"MasterPosition"> | bigint | number | null
    updatedBy?: BigIntNullableFilter<"MasterPosition"> | bigint | number | null
    createdAt?: DateTimeFilter<"MasterPosition"> | Date | string
    updatedAt?: DateTimeFilter<"MasterPosition"> | Date | string
    employees?: EmployeeListRelationFilter
  }, "id" | "code">

  export type MasterPositionOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MasterPositionCountOrderByAggregateInput
    _avg?: MasterPositionAvgOrderByAggregateInput
    _max?: MasterPositionMaxOrderByAggregateInput
    _min?: MasterPositionMinOrderByAggregateInput
    _sum?: MasterPositionSumOrderByAggregateInput
  }

  export type MasterPositionScalarWhereWithAggregatesInput = {
    AND?: MasterPositionScalarWhereWithAggregatesInput | MasterPositionScalarWhereWithAggregatesInput[]
    OR?: MasterPositionScalarWhereWithAggregatesInput[]
    NOT?: MasterPositionScalarWhereWithAggregatesInput | MasterPositionScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"MasterPosition"> | bigint | number
    code?: StringWithAggregatesFilter<"MasterPosition"> | string
    name?: StringWithAggregatesFilter<"MasterPosition"> | string
    createdBy?: BigIntNullableWithAggregatesFilter<"MasterPosition"> | bigint | number | null
    updatedBy?: BigIntNullableWithAggregatesFilter<"MasterPosition"> | bigint | number | null
    createdAt?: DateTimeWithAggregatesFilter<"MasterPosition"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MasterPosition"> | Date | string
  }

  export type LocationWhereInput = {
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    id?: BigIntFilter<"Location"> | bigint | number
    locationName?: StringFilter<"Location"> | string
    address?: StringNullableFilter<"Location"> | string | null
    latitude?: DecimalNullableFilter<"Location"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableFilter<"Location"> | Decimal | DecimalJsLike | number | string | null
    radius?: IntFilter<"Location"> | number
    createdBy?: BigIntNullableFilter<"Location"> | bigint | number | null
    updatedBy?: BigIntNullableFilter<"Location"> | bigint | number | null
    createdAt?: DateTimeFilter<"Location"> | Date | string
    updatedAt?: DateTimeFilter<"Location"> | Date | string
    employeeLocations?: EmployeeLocationListRelationFilter
  }

  export type LocationOrderByWithRelationInput = {
    id?: SortOrder
    locationName?: SortOrder
    address?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    radius?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    employeeLocations?: EmployeeLocationOrderByRelationAggregateInput
  }

  export type LocationWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    locationName?: StringFilter<"Location"> | string
    address?: StringNullableFilter<"Location"> | string | null
    latitude?: DecimalNullableFilter<"Location"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableFilter<"Location"> | Decimal | DecimalJsLike | number | string | null
    radius?: IntFilter<"Location"> | number
    createdBy?: BigIntNullableFilter<"Location"> | bigint | number | null
    updatedBy?: BigIntNullableFilter<"Location"> | bigint | number | null
    createdAt?: DateTimeFilter<"Location"> | Date | string
    updatedAt?: DateTimeFilter<"Location"> | Date | string
    employeeLocations?: EmployeeLocationListRelationFilter
  }, "id">

  export type LocationOrderByWithAggregationInput = {
    id?: SortOrder
    locationName?: SortOrder
    address?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    radius?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LocationCountOrderByAggregateInput
    _avg?: LocationAvgOrderByAggregateInput
    _max?: LocationMaxOrderByAggregateInput
    _min?: LocationMinOrderByAggregateInput
    _sum?: LocationSumOrderByAggregateInput
  }

  export type LocationScalarWhereWithAggregatesInput = {
    AND?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    OR?: LocationScalarWhereWithAggregatesInput[]
    NOT?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Location"> | bigint | number
    locationName?: StringWithAggregatesFilter<"Location"> | string
    address?: StringNullableWithAggregatesFilter<"Location"> | string | null
    latitude?: DecimalNullableWithAggregatesFilter<"Location"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableWithAggregatesFilter<"Location"> | Decimal | DecimalJsLike | number | string | null
    radius?: IntWithAggregatesFilter<"Location"> | number
    createdBy?: BigIntNullableWithAggregatesFilter<"Location"> | bigint | number | null
    updatedBy?: BigIntNullableWithAggregatesFilter<"Location"> | bigint | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Location"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Location"> | Date | string
  }

  export type EmployeeLocationWhereInput = {
    AND?: EmployeeLocationWhereInput | EmployeeLocationWhereInput[]
    OR?: EmployeeLocationWhereInput[]
    NOT?: EmployeeLocationWhereInput | EmployeeLocationWhereInput[]
    id?: BigIntFilter<"EmployeeLocation"> | bigint | number
    employeeId?: BigIntFilter<"EmployeeLocation"> | bigint | number
    locationId?: BigIntFilter<"EmployeeLocation"> | bigint | number
    isDefault?: BoolFilter<"EmployeeLocation"> | boolean
    createdAt?: DateTimeFilter<"EmployeeLocation"> | Date | string
    updatedAt?: DateTimeFilter<"EmployeeLocation"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
  }

  export type EmployeeLocationOrderByWithRelationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    locationId?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    employee?: EmployeeOrderByWithRelationInput
    location?: LocationOrderByWithRelationInput
  }

  export type EmployeeLocationWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    employeeId_locationId?: EmployeeLocationEmployeeIdLocationIdCompoundUniqueInput
    AND?: EmployeeLocationWhereInput | EmployeeLocationWhereInput[]
    OR?: EmployeeLocationWhereInput[]
    NOT?: EmployeeLocationWhereInput | EmployeeLocationWhereInput[]
    employeeId?: BigIntFilter<"EmployeeLocation"> | bigint | number
    locationId?: BigIntFilter<"EmployeeLocation"> | bigint | number
    isDefault?: BoolFilter<"EmployeeLocation"> | boolean
    createdAt?: DateTimeFilter<"EmployeeLocation"> | Date | string
    updatedAt?: DateTimeFilter<"EmployeeLocation"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
  }, "id" | "employeeId_locationId">

  export type EmployeeLocationOrderByWithAggregationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    locationId?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EmployeeLocationCountOrderByAggregateInput
    _avg?: EmployeeLocationAvgOrderByAggregateInput
    _max?: EmployeeLocationMaxOrderByAggregateInput
    _min?: EmployeeLocationMinOrderByAggregateInput
    _sum?: EmployeeLocationSumOrderByAggregateInput
  }

  export type EmployeeLocationScalarWhereWithAggregatesInput = {
    AND?: EmployeeLocationScalarWhereWithAggregatesInput | EmployeeLocationScalarWhereWithAggregatesInput[]
    OR?: EmployeeLocationScalarWhereWithAggregatesInput[]
    NOT?: EmployeeLocationScalarWhereWithAggregatesInput | EmployeeLocationScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"EmployeeLocation"> | bigint | number
    employeeId?: BigIntWithAggregatesFilter<"EmployeeLocation"> | bigint | number
    locationId?: BigIntWithAggregatesFilter<"EmployeeLocation"> | bigint | number
    isDefault?: BoolWithAggregatesFilter<"EmployeeLocation"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"EmployeeLocation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EmployeeLocation"> | Date | string
  }

  export type EmployeeCreateInput = {
    id?: bigint | number
    userId?: bigint | number | null
    employeeNo: string
    fullName: string
    phone?: string | null
    photoUrl?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    position: MasterPositionCreateNestedOneWithoutEmployeesInput
    employeeLocations?: EmployeeLocationCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateInput = {
    id?: bigint | number
    userId?: bigint | number | null
    employeeNo: string
    fullName: string
    phone?: string | null
    photoUrl?: string | null
    positionId: bigint | number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    employeeLocations?: EmployeeLocationUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    employeeNo?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    position?: MasterPositionUpdateOneRequiredWithoutEmployeesNestedInput
    employeeLocations?: EmployeeLocationUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    employeeNo?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    positionId?: BigIntFieldUpdateOperationsInput | bigint | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employeeLocations?: EmployeeLocationUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeCreateManyInput = {
    id?: bigint | number
    userId?: bigint | number | null
    employeeNo: string
    fullName: string
    phone?: string | null
    photoUrl?: string | null
    positionId: bigint | number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type EmployeeUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    employeeNo?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EmployeeUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    employeeNo?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    positionId?: BigIntFieldUpdateOperationsInput | bigint | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MasterPositionCreateInput = {
    id?: bigint | number
    code: string
    name: string
    createdBy?: bigint | number | null
    updatedBy?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employees?: EmployeeCreateNestedManyWithoutPositionInput
  }

  export type MasterPositionUncheckedCreateInput = {
    id?: bigint | number
    code: string
    name: string
    createdBy?: bigint | number | null
    updatedBy?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employees?: EmployeeUncheckedCreateNestedManyWithoutPositionInput
  }

  export type MasterPositionUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    updatedBy?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: EmployeeUpdateManyWithoutPositionNestedInput
  }

  export type MasterPositionUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    updatedBy?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: EmployeeUncheckedUpdateManyWithoutPositionNestedInput
  }

  export type MasterPositionCreateManyInput = {
    id?: bigint | number
    code: string
    name: string
    createdBy?: bigint | number | null
    updatedBy?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MasterPositionUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    updatedBy?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MasterPositionUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    updatedBy?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationCreateInput = {
    id?: bigint | number
    locationName: string
    address?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    radius: number
    createdBy?: bigint | number | null
    updatedBy?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employeeLocations?: EmployeeLocationCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateInput = {
    id?: bigint | number
    locationName: string
    address?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    radius: number
    createdBy?: bigint | number | null
    updatedBy?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employeeLocations?: EmployeeLocationUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    locationName?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    radius?: IntFieldUpdateOperationsInput | number
    createdBy?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    updatedBy?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employeeLocations?: EmployeeLocationUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    locationName?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    radius?: IntFieldUpdateOperationsInput | number
    createdBy?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    updatedBy?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employeeLocations?: EmployeeLocationUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type LocationCreateManyInput = {
    id?: bigint | number
    locationName: string
    address?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    radius: number
    createdBy?: bigint | number | null
    updatedBy?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocationUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    locationName?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    radius?: IntFieldUpdateOperationsInput | number
    createdBy?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    updatedBy?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    locationName?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    radius?: IntFieldUpdateOperationsInput | number
    createdBy?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    updatedBy?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeLocationCreateInput = {
    id?: bigint | number
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    employee: EmployeeCreateNestedOneWithoutEmployeeLocationsInput
    location: LocationCreateNestedOneWithoutEmployeeLocationsInput
  }

  export type EmployeeLocationUncheckedCreateInput = {
    id?: bigint | number
    employeeId: bigint | number
    locationId: bigint | number
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeLocationUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutEmployeeLocationsNestedInput
    location?: LocationUpdateOneRequiredWithoutEmployeeLocationsNestedInput
  }

  export type EmployeeLocationUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    employeeId?: BigIntFieldUpdateOperationsInput | bigint | number
    locationId?: BigIntFieldUpdateOperationsInput | bigint | number
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeLocationCreateManyInput = {
    id?: bigint | number
    employeeId: bigint | number
    locationId: bigint | number
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeLocationUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeLocationUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    employeeId?: BigIntFieldUpdateOperationsInput | bigint | number
    locationId?: BigIntFieldUpdateOperationsInput | bigint | number
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type MasterPositionScalarRelationFilter = {
    is?: MasterPositionWhereInput
    isNot?: MasterPositionWhereInput
  }

  export type EmployeeLocationListRelationFilter = {
    every?: EmployeeLocationWhereInput
    some?: EmployeeLocationWhereInput
    none?: EmployeeLocationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EmployeeLocationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    employeeNo?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    photoUrl?: SortOrder
    positionId?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type EmployeeAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    positionId?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    employeeNo?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    photoUrl?: SortOrder
    positionId?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type EmployeeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    employeeNo?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    photoUrl?: SortOrder
    positionId?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type EmployeeSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    positionId?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EmployeeListRelationFilter = {
    every?: EmployeeWhereInput
    some?: EmployeeWhereInput
    none?: EmployeeWhereInput
  }

  export type EmployeeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MasterPositionCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MasterPositionAvgOrderByAggregateInput = {
    id?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
  }

  export type MasterPositionMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MasterPositionMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MasterPositionSumOrderByAggregateInput = {
    id?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type LocationCountOrderByAggregateInput = {
    id?: SortOrder
    locationName?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    radius?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LocationAvgOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    radius?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
  }

  export type LocationMaxOrderByAggregateInput = {
    id?: SortOrder
    locationName?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    radius?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LocationMinOrderByAggregateInput = {
    id?: SortOrder
    locationName?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    radius?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LocationSumOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    radius?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EmployeeScalarRelationFilter = {
    is?: EmployeeWhereInput
    isNot?: EmployeeWhereInput
  }

  export type LocationScalarRelationFilter = {
    is?: LocationWhereInput
    isNot?: LocationWhereInput
  }

  export type EmployeeLocationEmployeeIdLocationIdCompoundUniqueInput = {
    employeeId: bigint | number
    locationId: bigint | number
  }

  export type EmployeeLocationCountOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    locationId?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeLocationAvgOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    locationId?: SortOrder
  }

  export type EmployeeLocationMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    locationId?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeLocationMinOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    locationId?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeLocationSumOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    locationId?: SortOrder
  }

  export type MasterPositionCreateNestedOneWithoutEmployeesInput = {
    create?: XOR<MasterPositionCreateWithoutEmployeesInput, MasterPositionUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: MasterPositionCreateOrConnectWithoutEmployeesInput
    connect?: MasterPositionWhereUniqueInput
  }

  export type EmployeeLocationCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<EmployeeLocationCreateWithoutEmployeeInput, EmployeeLocationUncheckedCreateWithoutEmployeeInput> | EmployeeLocationCreateWithoutEmployeeInput[] | EmployeeLocationUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EmployeeLocationCreateOrConnectWithoutEmployeeInput | EmployeeLocationCreateOrConnectWithoutEmployeeInput[]
    createMany?: EmployeeLocationCreateManyEmployeeInputEnvelope
    connect?: EmployeeLocationWhereUniqueInput | EmployeeLocationWhereUniqueInput[]
  }

  export type EmployeeLocationUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<EmployeeLocationCreateWithoutEmployeeInput, EmployeeLocationUncheckedCreateWithoutEmployeeInput> | EmployeeLocationCreateWithoutEmployeeInput[] | EmployeeLocationUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EmployeeLocationCreateOrConnectWithoutEmployeeInput | EmployeeLocationCreateOrConnectWithoutEmployeeInput[]
    createMany?: EmployeeLocationCreateManyEmployeeInputEnvelope
    connect?: EmployeeLocationWhereUniqueInput | EmployeeLocationWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type MasterPositionUpdateOneRequiredWithoutEmployeesNestedInput = {
    create?: XOR<MasterPositionCreateWithoutEmployeesInput, MasterPositionUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: MasterPositionCreateOrConnectWithoutEmployeesInput
    upsert?: MasterPositionUpsertWithoutEmployeesInput
    connect?: MasterPositionWhereUniqueInput
    update?: XOR<XOR<MasterPositionUpdateToOneWithWhereWithoutEmployeesInput, MasterPositionUpdateWithoutEmployeesInput>, MasterPositionUncheckedUpdateWithoutEmployeesInput>
  }

  export type EmployeeLocationUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<EmployeeLocationCreateWithoutEmployeeInput, EmployeeLocationUncheckedCreateWithoutEmployeeInput> | EmployeeLocationCreateWithoutEmployeeInput[] | EmployeeLocationUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EmployeeLocationCreateOrConnectWithoutEmployeeInput | EmployeeLocationCreateOrConnectWithoutEmployeeInput[]
    upsert?: EmployeeLocationUpsertWithWhereUniqueWithoutEmployeeInput | EmployeeLocationUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: EmployeeLocationCreateManyEmployeeInputEnvelope
    set?: EmployeeLocationWhereUniqueInput | EmployeeLocationWhereUniqueInput[]
    disconnect?: EmployeeLocationWhereUniqueInput | EmployeeLocationWhereUniqueInput[]
    delete?: EmployeeLocationWhereUniqueInput | EmployeeLocationWhereUniqueInput[]
    connect?: EmployeeLocationWhereUniqueInput | EmployeeLocationWhereUniqueInput[]
    update?: EmployeeLocationUpdateWithWhereUniqueWithoutEmployeeInput | EmployeeLocationUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: EmployeeLocationUpdateManyWithWhereWithoutEmployeeInput | EmployeeLocationUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: EmployeeLocationScalarWhereInput | EmployeeLocationScalarWhereInput[]
  }

  export type EmployeeLocationUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<EmployeeLocationCreateWithoutEmployeeInput, EmployeeLocationUncheckedCreateWithoutEmployeeInput> | EmployeeLocationCreateWithoutEmployeeInput[] | EmployeeLocationUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EmployeeLocationCreateOrConnectWithoutEmployeeInput | EmployeeLocationCreateOrConnectWithoutEmployeeInput[]
    upsert?: EmployeeLocationUpsertWithWhereUniqueWithoutEmployeeInput | EmployeeLocationUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: EmployeeLocationCreateManyEmployeeInputEnvelope
    set?: EmployeeLocationWhereUniqueInput | EmployeeLocationWhereUniqueInput[]
    disconnect?: EmployeeLocationWhereUniqueInput | EmployeeLocationWhereUniqueInput[]
    delete?: EmployeeLocationWhereUniqueInput | EmployeeLocationWhereUniqueInput[]
    connect?: EmployeeLocationWhereUniqueInput | EmployeeLocationWhereUniqueInput[]
    update?: EmployeeLocationUpdateWithWhereUniqueWithoutEmployeeInput | EmployeeLocationUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: EmployeeLocationUpdateManyWithWhereWithoutEmployeeInput | EmployeeLocationUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: EmployeeLocationScalarWhereInput | EmployeeLocationScalarWhereInput[]
  }

  export type EmployeeCreateNestedManyWithoutPositionInput = {
    create?: XOR<EmployeeCreateWithoutPositionInput, EmployeeUncheckedCreateWithoutPositionInput> | EmployeeCreateWithoutPositionInput[] | EmployeeUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutPositionInput | EmployeeCreateOrConnectWithoutPositionInput[]
    createMany?: EmployeeCreateManyPositionInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type EmployeeUncheckedCreateNestedManyWithoutPositionInput = {
    create?: XOR<EmployeeCreateWithoutPositionInput, EmployeeUncheckedCreateWithoutPositionInput> | EmployeeCreateWithoutPositionInput[] | EmployeeUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutPositionInput | EmployeeCreateOrConnectWithoutPositionInput[]
    createMany?: EmployeeCreateManyPositionInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type EmployeeUpdateManyWithoutPositionNestedInput = {
    create?: XOR<EmployeeCreateWithoutPositionInput, EmployeeUncheckedCreateWithoutPositionInput> | EmployeeCreateWithoutPositionInput[] | EmployeeUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutPositionInput | EmployeeCreateOrConnectWithoutPositionInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutPositionInput | EmployeeUpsertWithWhereUniqueWithoutPositionInput[]
    createMany?: EmployeeCreateManyPositionInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutPositionInput | EmployeeUpdateWithWhereUniqueWithoutPositionInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutPositionInput | EmployeeUpdateManyWithWhereWithoutPositionInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type EmployeeUncheckedUpdateManyWithoutPositionNestedInput = {
    create?: XOR<EmployeeCreateWithoutPositionInput, EmployeeUncheckedCreateWithoutPositionInput> | EmployeeCreateWithoutPositionInput[] | EmployeeUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutPositionInput | EmployeeCreateOrConnectWithoutPositionInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutPositionInput | EmployeeUpsertWithWhereUniqueWithoutPositionInput[]
    createMany?: EmployeeCreateManyPositionInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutPositionInput | EmployeeUpdateWithWhereUniqueWithoutPositionInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutPositionInput | EmployeeUpdateManyWithWhereWithoutPositionInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type EmployeeLocationCreateNestedManyWithoutLocationInput = {
    create?: XOR<EmployeeLocationCreateWithoutLocationInput, EmployeeLocationUncheckedCreateWithoutLocationInput> | EmployeeLocationCreateWithoutLocationInput[] | EmployeeLocationUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: EmployeeLocationCreateOrConnectWithoutLocationInput | EmployeeLocationCreateOrConnectWithoutLocationInput[]
    createMany?: EmployeeLocationCreateManyLocationInputEnvelope
    connect?: EmployeeLocationWhereUniqueInput | EmployeeLocationWhereUniqueInput[]
  }

  export type EmployeeLocationUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<EmployeeLocationCreateWithoutLocationInput, EmployeeLocationUncheckedCreateWithoutLocationInput> | EmployeeLocationCreateWithoutLocationInput[] | EmployeeLocationUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: EmployeeLocationCreateOrConnectWithoutLocationInput | EmployeeLocationCreateOrConnectWithoutLocationInput[]
    createMany?: EmployeeLocationCreateManyLocationInputEnvelope
    connect?: EmployeeLocationWhereUniqueInput | EmployeeLocationWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EmployeeLocationUpdateManyWithoutLocationNestedInput = {
    create?: XOR<EmployeeLocationCreateWithoutLocationInput, EmployeeLocationUncheckedCreateWithoutLocationInput> | EmployeeLocationCreateWithoutLocationInput[] | EmployeeLocationUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: EmployeeLocationCreateOrConnectWithoutLocationInput | EmployeeLocationCreateOrConnectWithoutLocationInput[]
    upsert?: EmployeeLocationUpsertWithWhereUniqueWithoutLocationInput | EmployeeLocationUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: EmployeeLocationCreateManyLocationInputEnvelope
    set?: EmployeeLocationWhereUniqueInput | EmployeeLocationWhereUniqueInput[]
    disconnect?: EmployeeLocationWhereUniqueInput | EmployeeLocationWhereUniqueInput[]
    delete?: EmployeeLocationWhereUniqueInput | EmployeeLocationWhereUniqueInput[]
    connect?: EmployeeLocationWhereUniqueInput | EmployeeLocationWhereUniqueInput[]
    update?: EmployeeLocationUpdateWithWhereUniqueWithoutLocationInput | EmployeeLocationUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: EmployeeLocationUpdateManyWithWhereWithoutLocationInput | EmployeeLocationUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: EmployeeLocationScalarWhereInput | EmployeeLocationScalarWhereInput[]
  }

  export type EmployeeLocationUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<EmployeeLocationCreateWithoutLocationInput, EmployeeLocationUncheckedCreateWithoutLocationInput> | EmployeeLocationCreateWithoutLocationInput[] | EmployeeLocationUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: EmployeeLocationCreateOrConnectWithoutLocationInput | EmployeeLocationCreateOrConnectWithoutLocationInput[]
    upsert?: EmployeeLocationUpsertWithWhereUniqueWithoutLocationInput | EmployeeLocationUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: EmployeeLocationCreateManyLocationInputEnvelope
    set?: EmployeeLocationWhereUniqueInput | EmployeeLocationWhereUniqueInput[]
    disconnect?: EmployeeLocationWhereUniqueInput | EmployeeLocationWhereUniqueInput[]
    delete?: EmployeeLocationWhereUniqueInput | EmployeeLocationWhereUniqueInput[]
    connect?: EmployeeLocationWhereUniqueInput | EmployeeLocationWhereUniqueInput[]
    update?: EmployeeLocationUpdateWithWhereUniqueWithoutLocationInput | EmployeeLocationUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: EmployeeLocationUpdateManyWithWhereWithoutLocationInput | EmployeeLocationUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: EmployeeLocationScalarWhereInput | EmployeeLocationScalarWhereInput[]
  }

  export type EmployeeCreateNestedOneWithoutEmployeeLocationsInput = {
    create?: XOR<EmployeeCreateWithoutEmployeeLocationsInput, EmployeeUncheckedCreateWithoutEmployeeLocationsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutEmployeeLocationsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type LocationCreateNestedOneWithoutEmployeeLocationsInput = {
    create?: XOR<LocationCreateWithoutEmployeeLocationsInput, LocationUncheckedCreateWithoutEmployeeLocationsInput>
    connectOrCreate?: LocationCreateOrConnectWithoutEmployeeLocationsInput
    connect?: LocationWhereUniqueInput
  }

  export type EmployeeUpdateOneRequiredWithoutEmployeeLocationsNestedInput = {
    create?: XOR<EmployeeCreateWithoutEmployeeLocationsInput, EmployeeUncheckedCreateWithoutEmployeeLocationsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutEmployeeLocationsInput
    upsert?: EmployeeUpsertWithoutEmployeeLocationsInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutEmployeeLocationsInput, EmployeeUpdateWithoutEmployeeLocationsInput>, EmployeeUncheckedUpdateWithoutEmployeeLocationsInput>
  }

  export type LocationUpdateOneRequiredWithoutEmployeeLocationsNestedInput = {
    create?: XOR<LocationCreateWithoutEmployeeLocationsInput, LocationUncheckedCreateWithoutEmployeeLocationsInput>
    connectOrCreate?: LocationCreateOrConnectWithoutEmployeeLocationsInput
    upsert?: LocationUpsertWithoutEmployeeLocationsInput
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutEmployeeLocationsInput, LocationUpdateWithoutEmployeeLocationsInput>, LocationUncheckedUpdateWithoutEmployeeLocationsInput>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type MasterPositionCreateWithoutEmployeesInput = {
    id?: bigint | number
    code: string
    name: string
    createdBy?: bigint | number | null
    updatedBy?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MasterPositionUncheckedCreateWithoutEmployeesInput = {
    id?: bigint | number
    code: string
    name: string
    createdBy?: bigint | number | null
    updatedBy?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MasterPositionCreateOrConnectWithoutEmployeesInput = {
    where: MasterPositionWhereUniqueInput
    create: XOR<MasterPositionCreateWithoutEmployeesInput, MasterPositionUncheckedCreateWithoutEmployeesInput>
  }

  export type EmployeeLocationCreateWithoutEmployeeInput = {
    id?: bigint | number
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    location: LocationCreateNestedOneWithoutEmployeeLocationsInput
  }

  export type EmployeeLocationUncheckedCreateWithoutEmployeeInput = {
    id?: bigint | number
    locationId: bigint | number
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeLocationCreateOrConnectWithoutEmployeeInput = {
    where: EmployeeLocationWhereUniqueInput
    create: XOR<EmployeeLocationCreateWithoutEmployeeInput, EmployeeLocationUncheckedCreateWithoutEmployeeInput>
  }

  export type EmployeeLocationCreateManyEmployeeInputEnvelope = {
    data: EmployeeLocationCreateManyEmployeeInput | EmployeeLocationCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type MasterPositionUpsertWithoutEmployeesInput = {
    update: XOR<MasterPositionUpdateWithoutEmployeesInput, MasterPositionUncheckedUpdateWithoutEmployeesInput>
    create: XOR<MasterPositionCreateWithoutEmployeesInput, MasterPositionUncheckedCreateWithoutEmployeesInput>
    where?: MasterPositionWhereInput
  }

  export type MasterPositionUpdateToOneWithWhereWithoutEmployeesInput = {
    where?: MasterPositionWhereInput
    data: XOR<MasterPositionUpdateWithoutEmployeesInput, MasterPositionUncheckedUpdateWithoutEmployeesInput>
  }

  export type MasterPositionUpdateWithoutEmployeesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    updatedBy?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MasterPositionUncheckedUpdateWithoutEmployeesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    updatedBy?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeLocationUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: EmployeeLocationWhereUniqueInput
    update: XOR<EmployeeLocationUpdateWithoutEmployeeInput, EmployeeLocationUncheckedUpdateWithoutEmployeeInput>
    create: XOR<EmployeeLocationCreateWithoutEmployeeInput, EmployeeLocationUncheckedCreateWithoutEmployeeInput>
  }

  export type EmployeeLocationUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: EmployeeLocationWhereUniqueInput
    data: XOR<EmployeeLocationUpdateWithoutEmployeeInput, EmployeeLocationUncheckedUpdateWithoutEmployeeInput>
  }

  export type EmployeeLocationUpdateManyWithWhereWithoutEmployeeInput = {
    where: EmployeeLocationScalarWhereInput
    data: XOR<EmployeeLocationUpdateManyMutationInput, EmployeeLocationUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type EmployeeLocationScalarWhereInput = {
    AND?: EmployeeLocationScalarWhereInput | EmployeeLocationScalarWhereInput[]
    OR?: EmployeeLocationScalarWhereInput[]
    NOT?: EmployeeLocationScalarWhereInput | EmployeeLocationScalarWhereInput[]
    id?: BigIntFilter<"EmployeeLocation"> | bigint | number
    employeeId?: BigIntFilter<"EmployeeLocation"> | bigint | number
    locationId?: BigIntFilter<"EmployeeLocation"> | bigint | number
    isDefault?: BoolFilter<"EmployeeLocation"> | boolean
    createdAt?: DateTimeFilter<"EmployeeLocation"> | Date | string
    updatedAt?: DateTimeFilter<"EmployeeLocation"> | Date | string
  }

  export type EmployeeCreateWithoutPositionInput = {
    id?: bigint | number
    userId?: bigint | number | null
    employeeNo: string
    fullName: string
    phone?: string | null
    photoUrl?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    employeeLocations?: EmployeeLocationCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutPositionInput = {
    id?: bigint | number
    userId?: bigint | number | null
    employeeNo: string
    fullName: string
    phone?: string | null
    photoUrl?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    employeeLocations?: EmployeeLocationUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutPositionInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutPositionInput, EmployeeUncheckedCreateWithoutPositionInput>
  }

  export type EmployeeCreateManyPositionInputEnvelope = {
    data: EmployeeCreateManyPositionInput | EmployeeCreateManyPositionInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeUpsertWithWhereUniqueWithoutPositionInput = {
    where: EmployeeWhereUniqueInput
    update: XOR<EmployeeUpdateWithoutPositionInput, EmployeeUncheckedUpdateWithoutPositionInput>
    create: XOR<EmployeeCreateWithoutPositionInput, EmployeeUncheckedCreateWithoutPositionInput>
  }

  export type EmployeeUpdateWithWhereUniqueWithoutPositionInput = {
    where: EmployeeWhereUniqueInput
    data: XOR<EmployeeUpdateWithoutPositionInput, EmployeeUncheckedUpdateWithoutPositionInput>
  }

  export type EmployeeUpdateManyWithWhereWithoutPositionInput = {
    where: EmployeeScalarWhereInput
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyWithoutPositionInput>
  }

  export type EmployeeScalarWhereInput = {
    AND?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    OR?: EmployeeScalarWhereInput[]
    NOT?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    id?: BigIntFilter<"Employee"> | bigint | number
    userId?: BigIntNullableFilter<"Employee"> | bigint | number | null
    employeeNo?: StringFilter<"Employee"> | string
    fullName?: StringFilter<"Employee"> | string
    phone?: StringNullableFilter<"Employee"> | string | null
    photoUrl?: StringNullableFilter<"Employee"> | string | null
    positionId?: BigIntFilter<"Employee"> | bigint | number
    isDeleted?: BoolFilter<"Employee"> | boolean
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Employee"> | Date | string | null
  }

  export type EmployeeLocationCreateWithoutLocationInput = {
    id?: bigint | number
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    employee: EmployeeCreateNestedOneWithoutEmployeeLocationsInput
  }

  export type EmployeeLocationUncheckedCreateWithoutLocationInput = {
    id?: bigint | number
    employeeId: bigint | number
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeLocationCreateOrConnectWithoutLocationInput = {
    where: EmployeeLocationWhereUniqueInput
    create: XOR<EmployeeLocationCreateWithoutLocationInput, EmployeeLocationUncheckedCreateWithoutLocationInput>
  }

  export type EmployeeLocationCreateManyLocationInputEnvelope = {
    data: EmployeeLocationCreateManyLocationInput | EmployeeLocationCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeLocationUpsertWithWhereUniqueWithoutLocationInput = {
    where: EmployeeLocationWhereUniqueInput
    update: XOR<EmployeeLocationUpdateWithoutLocationInput, EmployeeLocationUncheckedUpdateWithoutLocationInput>
    create: XOR<EmployeeLocationCreateWithoutLocationInput, EmployeeLocationUncheckedCreateWithoutLocationInput>
  }

  export type EmployeeLocationUpdateWithWhereUniqueWithoutLocationInput = {
    where: EmployeeLocationWhereUniqueInput
    data: XOR<EmployeeLocationUpdateWithoutLocationInput, EmployeeLocationUncheckedUpdateWithoutLocationInput>
  }

  export type EmployeeLocationUpdateManyWithWhereWithoutLocationInput = {
    where: EmployeeLocationScalarWhereInput
    data: XOR<EmployeeLocationUpdateManyMutationInput, EmployeeLocationUncheckedUpdateManyWithoutLocationInput>
  }

  export type EmployeeCreateWithoutEmployeeLocationsInput = {
    id?: bigint | number
    userId?: bigint | number | null
    employeeNo: string
    fullName: string
    phone?: string | null
    photoUrl?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    position: MasterPositionCreateNestedOneWithoutEmployeesInput
  }

  export type EmployeeUncheckedCreateWithoutEmployeeLocationsInput = {
    id?: bigint | number
    userId?: bigint | number | null
    employeeNo: string
    fullName: string
    phone?: string | null
    photoUrl?: string | null
    positionId: bigint | number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type EmployeeCreateOrConnectWithoutEmployeeLocationsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutEmployeeLocationsInput, EmployeeUncheckedCreateWithoutEmployeeLocationsInput>
  }

  export type LocationCreateWithoutEmployeeLocationsInput = {
    id?: bigint | number
    locationName: string
    address?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    radius: number
    createdBy?: bigint | number | null
    updatedBy?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocationUncheckedCreateWithoutEmployeeLocationsInput = {
    id?: bigint | number
    locationName: string
    address?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    radius: number
    createdBy?: bigint | number | null
    updatedBy?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocationCreateOrConnectWithoutEmployeeLocationsInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutEmployeeLocationsInput, LocationUncheckedCreateWithoutEmployeeLocationsInput>
  }

  export type EmployeeUpsertWithoutEmployeeLocationsInput = {
    update: XOR<EmployeeUpdateWithoutEmployeeLocationsInput, EmployeeUncheckedUpdateWithoutEmployeeLocationsInput>
    create: XOR<EmployeeCreateWithoutEmployeeLocationsInput, EmployeeUncheckedCreateWithoutEmployeeLocationsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutEmployeeLocationsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutEmployeeLocationsInput, EmployeeUncheckedUpdateWithoutEmployeeLocationsInput>
  }

  export type EmployeeUpdateWithoutEmployeeLocationsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    employeeNo?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    position?: MasterPositionUpdateOneRequiredWithoutEmployeesNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutEmployeeLocationsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    employeeNo?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    positionId?: BigIntFieldUpdateOperationsInput | bigint | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LocationUpsertWithoutEmployeeLocationsInput = {
    update: XOR<LocationUpdateWithoutEmployeeLocationsInput, LocationUncheckedUpdateWithoutEmployeeLocationsInput>
    create: XOR<LocationCreateWithoutEmployeeLocationsInput, LocationUncheckedCreateWithoutEmployeeLocationsInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutEmployeeLocationsInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutEmployeeLocationsInput, LocationUncheckedUpdateWithoutEmployeeLocationsInput>
  }

  export type LocationUpdateWithoutEmployeeLocationsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    locationName?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    radius?: IntFieldUpdateOperationsInput | number
    createdBy?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    updatedBy?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUncheckedUpdateWithoutEmployeeLocationsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    locationName?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    radius?: IntFieldUpdateOperationsInput | number
    createdBy?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    updatedBy?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeLocationCreateManyEmployeeInput = {
    id?: bigint | number
    locationId: bigint | number
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeLocationUpdateWithoutEmployeeInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationUpdateOneRequiredWithoutEmployeeLocationsNestedInput
  }

  export type EmployeeLocationUncheckedUpdateWithoutEmployeeInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    locationId?: BigIntFieldUpdateOperationsInput | bigint | number
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeLocationUncheckedUpdateManyWithoutEmployeeInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    locationId?: BigIntFieldUpdateOperationsInput | bigint | number
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeCreateManyPositionInput = {
    id?: bigint | number
    userId?: bigint | number | null
    employeeNo: string
    fullName: string
    phone?: string | null
    photoUrl?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type EmployeeUpdateWithoutPositionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    employeeNo?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employeeLocations?: EmployeeLocationUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutPositionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    employeeNo?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employeeLocations?: EmployeeLocationUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateManyWithoutPositionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    employeeNo?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EmployeeLocationCreateManyLocationInput = {
    id?: bigint | number
    employeeId: bigint | number
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeLocationUpdateWithoutLocationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutEmployeeLocationsNestedInput
  }

  export type EmployeeLocationUncheckedUpdateWithoutLocationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    employeeId?: BigIntFieldUpdateOperationsInput | bigint | number
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeLocationUncheckedUpdateManyWithoutLocationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    employeeId?: BigIntFieldUpdateOperationsInput | bigint | number
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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