type Success<TData> = {
  success: true;
  data: TData;
};

type Failure<TError> = {
  success: false;
  error: TError;
};

export type SafeResult<TData, TError> = Success<TData> | Failure<TError>;
export type SafeResultAsync<TData, TError> = Promise<SafeResult<TData, TError>>;

export function success<TData>(data: TData): SafeResult<TData, never> {
  return {
    success: true,
    data,
  };
}

export function failure<TError>(error: TError): SafeResult<never, TError> {
  return {
    success: false,
    error,
  };
}

export function isError<TData, TError>(
  either: SafeResult<TData, TError>
): either is Failure<TError> {
  return !either.success;
}
