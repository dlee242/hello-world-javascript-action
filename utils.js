import { setSecret } from "@actions/core";

import _sodium from 'libsodium-wrappers';
await _sodium.ready;


export async function encrypt(value, key) {
    const sodium = _sodium;
    const binkey = sodium.from_base64(key, sodium.base64_variants.ORIGINAL);
    const binsec = sodium.from_string(value);
  
    // Encrypt the secret using libsodium
    const encryptedBytes = sodium.crypto_box_seal(binsec, binkey);
  
    // Convert the encrypted Uint8Array to Base64
    const encrypted = sodium.to_base64(encryptedBytes, sodium.base64_variants.ORIGINAL);

    // tell Github to mask this from logs
    setSecret(encrypted);

    return encrypted;
}
