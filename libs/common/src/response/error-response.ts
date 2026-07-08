export class ErrorResponse {
  constructor(
    public readonly message: string,
    public readonly errors?: unknown,
    public readonly statusCode?: number,
    public readonly path?: string,
    public readonly timestamp: string = new Date().toISOString(),
    public readonly success: boolean = false,
  ) {}
}