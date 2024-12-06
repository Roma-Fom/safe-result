# safe-result-ts

A TypeScript utility for handling success and failure results in a type-safe manner without the need for try-catch blocks.

## Installation

Install the package using npm:

```sh
npm install safe-result-ts
```

## Usage

### Types

#### The package provides the following types:

- SafeResult<TData, TError>: Represents either a success or a failure result.
- SafeResultAsync<TData, TError>: Represents a promise that resolves to a SafeResult.

### Functions

#### Creates a success result

```typescript
success<TData>(data: TData): SafeResult<TData, never>

return success('Hello, world!');
```

#### Creates a failure result

```typescript
failure<TError>(error: TError): SafeResult<never, TError>

return failure('An error occurred');
```

#### Checks if a result is a failure

```typescript
isError<TData, TError>(either: SafeResult<TData, TError>)

const result:SafeResultAsync<{id:string},BaseError> = await someAsyncFunction();

if(isError(result)) {
    return res.status(result.error.code).send(result.error.message)
};

return res.status(200).send(result.data);
```
