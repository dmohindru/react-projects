function base64URLEncode(str: ArrayBuffer) {
  const uint8Array = new Uint8Array(str);
  let stringRepresentation = '';

  for (let i = 0; i < uint8Array.length; i++) {
    stringRepresentation += String.fromCharCode(uint8Array[i]);
  }

  return btoa(stringRepresentation)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

async function sha256(plain: string) {
  const encoder = new TextEncoder();
  const data = encoder.encode(plain);
  return window.crypto.subtle.digest('SHA-256', data);
}

export async function generatePKCE(): Promise<{
  codeVerifier: string;
  codeChallenge: string;
}> {
  const codeVerifier = base64URLEncode(
    window.crypto.getRandomValues(new Uint8Array(32))
  );
  const hashed = await sha256(codeVerifier);
  const codeChallenge = base64URLEncode(hashed);

  return { codeVerifier, codeChallenge };
}
