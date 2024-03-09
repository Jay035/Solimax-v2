/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface BridgeInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "BridgeToken"
      | "canProcessMigration"
      | "getTokenBalance"
      | "lockTokens"
      | "owner"
      | "renounceOwnership"
      | "revertToken"
      | "setNewToken"
      | "transferOwnership"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "OwnershipTransferred"
      | "bridged"
      | "locked"
      | "reverted"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "BridgeToken",
    values: [BigNumberish, AddressLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "canProcessMigration",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lockTokens",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "revertToken",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setNewToken",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "BridgeToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "canProcessMigration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lockTokens", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "revertToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setNewToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace bridgedEvent {
  export type InputTuple = [
    amountBridged: BigNumberish,
    reciever: AddressLike,
    signature: string
  ];
  export type OutputTuple = [
    amountBridged: bigint,
    reciever: string,
    signature: string
  ];
  export interface OutputObject {
    amountBridged: bigint;
    reciever: string;
    signature: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace lockedEvent {
  export type InputTuple = [
    amountLocked: BigNumberish,
    locker: AddressLike,
    signature: string
  ];
  export type OutputTuple = [
    amountLocked: bigint,
    locker: string,
    signature: string
  ];
  export interface OutputObject {
    amountLocked: bigint;
    locker: string;
    signature: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace revertedEvent {
  export type InputTuple = [
    amountLocked: BigNumberish,
    timeStamp: BigNumberish,
    reciever: AddressLike
  ];
  export type OutputTuple = [
    amountLocked: bigint,
    timeStamp: bigint,
    reciever: string
  ];
  export interface OutputObject {
    amountLocked: bigint;
    timeStamp: bigint;
    reciever: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Bridge extends BaseContract {
  connect(runner?: ContractRunner | null): Bridge;
  waitForDeployment(): Promise<this>;

  interface: BridgeInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  BridgeToken: TypedContractMethod<
    [amount: BigNumberish, to: AddressLike, lockerSignature: string],
    [void],
    "nonpayable"
  >;

  canProcessMigration: TypedContractMethod<
    [fromAmount: BigNumberish],
    [boolean],
    "view"
  >;

  getTokenBalance: TypedContractMethod<[], [bigint], "view">;

  lockTokens: TypedContractMethod<
    [amount: BigNumberish, signedmessage: string],
    [void],
    "nonpayable"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  revertToken: TypedContractMethod<
    [amount: BigNumberish, to: AddressLike],
    [void],
    "nonpayable"
  >;

  setNewToken: TypedContractMethod<
    [newToken: AddressLike],
    [void],
    "nonpayable"
  >;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "BridgeToken"
  ): TypedContractMethod<
    [amount: BigNumberish, to: AddressLike, lockerSignature: string],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "canProcessMigration"
  ): TypedContractMethod<[fromAmount: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "getTokenBalance"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "lockTokens"
  ): TypedContractMethod<
    [amount: BigNumberish, signedmessage: string],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "revertToken"
  ): TypedContractMethod<
    [amount: BigNumberish, to: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setNewToken"
  ): TypedContractMethod<[newToken: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;

  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "bridged"
  ): TypedContractEvent<
    bridgedEvent.InputTuple,
    bridgedEvent.OutputTuple,
    bridgedEvent.OutputObject
  >;
  getEvent(
    key: "locked"
  ): TypedContractEvent<
    lockedEvent.InputTuple,
    lockedEvent.OutputTuple,
    lockedEvent.OutputObject
  >;
  getEvent(
    key: "reverted"
  ): TypedContractEvent<
    revertedEvent.InputTuple,
    revertedEvent.OutputTuple,
    revertedEvent.OutputObject
  >;

  filters: {
    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "bridged(uint256,address,string)": TypedContractEvent<
      bridgedEvent.InputTuple,
      bridgedEvent.OutputTuple,
      bridgedEvent.OutputObject
    >;
    bridged: TypedContractEvent<
      bridgedEvent.InputTuple,
      bridgedEvent.OutputTuple,
      bridgedEvent.OutputObject
    >;

    "locked(uint256,address,string)": TypedContractEvent<
      lockedEvent.InputTuple,
      lockedEvent.OutputTuple,
      lockedEvent.OutputObject
    >;
    locked: TypedContractEvent<
      lockedEvent.InputTuple,
      lockedEvent.OutputTuple,
      lockedEvent.OutputObject
    >;

    "reverted(uint256,uint256,address)": TypedContractEvent<
      revertedEvent.InputTuple,
      revertedEvent.OutputTuple,
      revertedEvent.OutputObject
    >;
    reverted: TypedContractEvent<
      revertedEvent.InputTuple,
      revertedEvent.OutputTuple,
      revertedEvent.OutputObject
    >;
  };
}
