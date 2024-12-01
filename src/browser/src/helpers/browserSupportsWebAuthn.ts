/**
 * Determine if the browser is capable of Webauthn
 */
export function browserSupportsWebAuthn(): boolean {
  return _browserSupportsWebAuthnInternals.stubThis(
    globalThis?.PublicKeyCredential !== undefined &&
      typeof globalThis.PublicKeyCredential === 'function',
  );
}

// Make it possible to stub the return value during testing
export const _browserSupportsWebAuthnInternals = {
  stubThis: (value: boolean) => value,
};
