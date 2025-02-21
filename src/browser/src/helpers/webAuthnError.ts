/**
 * A custom Error used to return a more nuanced error detailing _why_ one of the eight documented
 * errors in the spec was raised after calling `navigator.credentials.create()` or
 * `navigator.credentials.get()`:
 *
 * - `AbortError`
 * - `ConstraintError`
 * - `InvalidStateError`
 * - `NotAllowedError`
 * - `NotSupportedError`
 * - `SecurityError`
 * - `TypeError`
 * - `UnknownError`
 *
 * Error messages were determined through investigation of the spec to determine under which
 * scenarios a given error would be raised.
 */
 export class WebAuthnError extends Error {
   code: WebAuthnErrorCode

   constructor({
     message,
     code,
     cause,
     name,
   }: {
     message: string
     code: WebAuthnErrorCode
     cause: Error
     name?: string
   }) {
     // @ts-ignore: help Rollup understand that `cause` is okay to set
     super(message, { cause })

     this.name = name ?? cause.name
     this.code = code

     // 在构造函数中调用日志打印方法
     this.logError()
   }

   // 处理错误日志的生命周期方法
   private logError() {
     console.error("WebAuthnError:", {
       message: this.message,
       code: this.code,
       cause: this.cause,
       name: this.name,
     })
   }
 }

export type WebAuthnErrorCode =
  | 'ERROR_CEREMONY_ABORTED'
  | 'ERROR_INVALID_DOMAIN'
  | 'ERROR_INVALID_RP_ID'
  | 'ERROR_INVALID_USER_ID_LENGTH'
  | 'ERROR_MALFORMED_PUBKEYCREDPARAMS'
  | 'ERROR_AUTHENTICATOR_GENERAL_ERROR'
  | 'ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT'
  | 'ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT'
  | 'ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED'
  | 'ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG'
  | 'ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE'
  | 'ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY';
