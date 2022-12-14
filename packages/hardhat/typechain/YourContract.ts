/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface YourContractInterface extends utils.Interface {
  functions: {
    "purpose()": FunctionFragment;
    "setPurpose(string)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "purpose", values?: undefined): string;
  encodeFunctionData(functionFragment: "setPurpose", values: [string]): string;

  decodeFunctionResult(functionFragment: "purpose", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setPurpose", data: BytesLike): Result;

  events: {};
}

export interface YourContract extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: YourContractInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    purpose(overrides?: CallOverrides): Promise<[string]>;

    setPurpose(
      newPurpose: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  purpose(overrides?: CallOverrides): Promise<string>;

  setPurpose(
    newPurpose: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    purpose(overrides?: CallOverrides): Promise<string>;

    setPurpose(newPurpose: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    purpose(overrides?: CallOverrides): Promise<BigNumber>;

    setPurpose(
      newPurpose: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    purpose(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setPurpose(
      newPurpose: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
