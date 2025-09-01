/*
 * Vencord, a Discord client mod
 * Copyright (c) 2025 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import * as keyVal from "idb-keyval";

const keyValStore = keyVal.createStore("BetterVoiceLog", "keyval");

export function set(key: string, value: any) {
    return keyVal.set(key, JSON.stringify(value || null), keyValStore);
}

export function setMany(values: Record<string, any>) {
    return keyVal.setMany(Object.entries(values).map(([key, value]) => [key, JSON.stringify(value || null)]), keyValStore);
}

export async function getMany(keys: string[]) {
    return (await keyVal.getMany(keys, keyValStore)).map((value: string) => JSON.parse(value || "null"));
}

export async function get(key: string) {
    return JSON.parse((await keyVal.get(key, keyValStore)) || "null");
}

export function remove(key: string) {
    return keyVal.del(key, keyValStore);
}
