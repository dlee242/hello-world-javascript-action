import * as core from "@actions/core";

import { seal } from "tweetsodium";

export async function encrypt(value, key) {
    // Convert the message and key to Uint8Array's (Buffer implements that interface)
    const messageBytes = Buffer.from(value, "utf8");
    const keyBytes = Buffer.from(key, "base64");

    // Encrypt using LibSodium
    const encryptedBytes = seal(messageBytes, keyBytes);

    // Base64 the encrypted secret
    const encrypted = Buffer.from(encryptedBytes).toString("base64");

    // tell Github to mask this from logs
    core.setSecret(encrypted);

    return encrypted;
}
