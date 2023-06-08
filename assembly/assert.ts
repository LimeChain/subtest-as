import { Address, BigInt, Bytes, ethereum } from "@graphprotocol/graph-ts";
import { countEntities } from "./store";
// Host exports for assertion.
declare namespace _assert {
  function fieldEquals(entityType: string, id: string, fieldName: string, expectedVal: string): bool;
  function equals(expected: ethereum.Value, actual: ethereum.Valueg): bool;
  function notInStore(entityType: string, id: string): bool;
  function fieldEqualsWithMessage(entityType: string, id: string, fieldName: string, expectedVal: string, message: string): bool;
  function equalsWithMessage(expected: ethereum.Value, actual: ethereum.Value, message: string): bool;
  function notInStoreWithMessage(entityType: string, id: string, message: string): bool;
}

export namespace assert {
  export function fieldEquals(entityType: string, id: string, fieldName: string, expectedVal: string, message: string = ""): void {
    let success: bool;

    if (message == "") {
      success = _assert.fieldEquals(entityType, id, fieldName, expectedVal);
    } else {
      success = _assert.fieldEqualsWithMessage(entityType, id, fieldName, expectedVal, message);
    };

    if (!success) {
      throw new Error("Assertion Error");
    }
  }

  export function equals(expected: ethereum.Value, actual: ethereum.Value, message: string = ""): void {
    let success: bool;

    if (message == "") {
      success = _assert.equals(expected, actual);
    } else {
      success = _assert.equalsWithMessage(expected, actual, message);
    };

    if (!success) {
      throw new Error("Assertion Error");
    };
  }

  export function notInStore(entityType: string, id: string, message: string = ""): void {
    let success: bool;

    if (message == "") {
      success = _assert.notInStore(entityType, id);
    } else {
      success = _assert.notInStoreWithMessage(entityType, id, message);
    };

    if (!success) {
      throw new Error("Assertion Error");
    };
  }

  export function addressEquals(address1: Address, address2: Address, message: string = ""): void {
    let success: bool;

    if (message == "") {
      success = _assert.equals(ethereum.Value.fromAddress(address1), ethereum.Value.fromAddress(address2));
    } else {
      success = _assert.equalsWithMessage(ethereum.Value.fromAddress(address1), ethereum.Value.fromAddress(address2), message);
    };

    if (!success) {
      throw new Error("Assertion Error");
    };
  }

  export function bytesEquals(bytes1: Bytes, bytes2: Bytes, message: string = ""): void {
    let success: bool;

    if (message == "") {
      success = _assert.equals(ethereum.Value.fromBytes(bytes1), ethereum.Value.fromBytes(bytes2));
    } else {
      success = _assert.equalsWithMessage(ethereum.Value.fromBytes(bytes1), ethereum.Value.fromBytes(bytes2), message);
    };

    if (!success) {
      throw new Error("Assertion Error");
    };
  }

  export function i32Equals(number1: i32, number2: i32, message: string = ""): void {
    let success: bool;

    if (message == "") {
      success = _assert.equals(ethereum.Value.fromI32(number1), ethereum.Value.fromI32(number2));
    } else {
      success = _assert.equalsWithMessage(ethereum.Value.fromI32(number1), ethereum.Value.fromI32(number2), message);
    };

    if (!success) {
      throw new Error("Assertion Error");
    };
  }

  export function bigIntEquals(bigInt1: BigInt, bigInt2: BigInt, message: string = ""): void {
    let success: bool;

    if (message == "") {
      success = _assert.equals(ethereum.Value.fromSignedBigInt(bigInt1), ethereum.Value.fromSignedBigInt(bigInt2));
    } else {
      success = _assert.equalsWithMessage(ethereum.Value.fromSignedBigInt(bigInt1), ethereum.Value.fromSignedBigInt(bigInt2), message);
    };

    if (!success) {
      throw new Error("Assertion Error");
    };
  }

  export function booleanEquals(bool1: boolean, bool2: boolean, message: string = ""): void {
    let success: bool;

    if (message == "") {
      success = _assert.equals(ethereum.Value.fromBoolean(bool1), ethereum.Value.fromBoolean(bool2));
    } else {
      success = _assert.equalsWithMessage(ethereum.Value.fromBoolean(bool1), ethereum.Value.fromBoolean(bool2), message);
    };

    if (!success) {
      throw new Error("booleanEquals Assertion Error");
    };
  }

  export function stringEquals(string1: string, string2: string, message: string = ""): void {
    let success: bool;

    if (message == "") {
      success = _assert.equals(ethereum.Value.fromString(string1), ethereum.Value.fromString(string2));
    } else {
      success = _assert.equalsWithMessage(ethereum.Value.fromString(string1), ethereum.Value.fromString(string2), message);
    };

    if (!success) {
      throw new Error("stringEquals Assertion Error");
    };
  }

  export function arrayEquals(array1: Array<ethereum.Value>, array2: Array<ethereum.Value>, message: string = ""): void {
    let success: bool;

    if (message == "") {
      success = _assert.equals(ethereum.Value.fromArray(array1), ethereum.Value.fromArray(array2));
    } else {
      success = _assert.equalsWithMessage(ethereum.Value.fromArray(array1), ethereum.Value.fromArray(array2), message);
    };

    if (!success) {
      throw new Error("arrayEquals Assertion Error");
    };
  }

  export function tupleEquals(tuple1: ethereum.Tuple, tuple2: ethereum.Tuple, message: string = ""): void {
    let success: bool;

    if (message == "") {
      success = _assert.equals(ethereum.Value.fromTuple(tuple1), ethereum.Value.fromTuple(tuple2));
    } else {
      success = _assert.equalsWithMessage(ethereum.Value.fromTuple(tuple1), ethereum.Value.fromTuple(tuple2), message);
    };

    if (!success) {
      throw new Error("tupleEquals Assertion Error");
    };
  }

  export function assertTrue(value: boolean, message: string = ""): void {
    let success: bool;

    if (message == "") {
      success = _assert.equals(ethereum.Value.fromBoolean(true), ethereum.Value.fromBoolean(value));
    } else {
      success = _assert.equalsWithMessage(ethereum.Value.fromBoolean(true), ethereum.Value.fromBoolean(value), message);
    };

    if (!success) {
      throw new Error("assertTrue Assertion Error");
    };
  }

  export function assertNull<T>(value: T, message: string = ""): void {
    let success: bool;

    if (message == "") {
      success = _assert.equals(ethereum.Value.fromBoolean(true), ethereum.Value.fromBoolean(value == null));
    } else {
      success = _assert.equalsWithMessage(ethereum.Value.fromBoolean(true), ethereum.Value.fromBoolean(value == null), message);
    };

    if (!success) {
      throw new Error("assertNull Assertion Error");
    };
  }

  export function assertNotNull<T>(value: T, message: string = ""): void {
    let success: bool;

    if (message == "") {
      success = _assert.equals(ethereum.Value.fromBoolean(true), ethereum.Value.fromBoolean(value != null));
    } else {
      success = _assert.equalsWithMessage(ethereum.Value.fromBoolean(true), ethereum.Value.fromBoolean(value != null), message);
    };

    if (!success) {
      throw new Error("assertNotNull Assertion Error");
    };
  }

  export function entityCount(entityType: string, expectedCount: i32, message: string = ""): void {
    let success: bool;

    if (message == "") {
      success = _assert.equals(ethereum.Value.fromI32(expectedCount), ethereum.Value.fromI32(countEntities(entityType)));
    } else {
      success = _assert.equalsWithMessage(ethereum.Value.fromI32(expectedCount), ethereum.Value.fromI32(countEntities(entityType)), message);
    };

    if (!success) {
      throw new Error("entityCount Assertion Error");
    };
  }
}
