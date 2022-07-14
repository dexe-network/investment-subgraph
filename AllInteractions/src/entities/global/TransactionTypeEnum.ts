import { BigInt } from "@graphprotocol/graph-ts";

export enum TransactionType {
  SWAP = 1,
  INVEST = 2,
  DIVEST = 3,

  POOL_CREATE = 4,
  POOL_EDIT = 5,
  POOL_UPDATE_MANAGERS = 6,
  POOL_UPDATE_INVESTORS = 7,

  UPDATED_USER_CREDENTIALS = 8,

  RISKY_PROPOSAL_CREATE = 9,
  RISKY_PROPOSAL_EDIT = 10,
  RISKY_PROPOSAL_INVEST = 11,
  RISKY_PROPOSAL_DIVEST = 12,
  RISKY_PROPOSAL_SWAP = 13,

  INVEST_PROPOSAL_CREATE = 14,
  INVEST_PROPOSAL_EDIT = 15,
  INVEST_PROPOSAL_INVEST = 16,
  INVEST_PROPOSAL_WITHDRAW = 17,
  INVEST_PROPOSAL_SUPPLY = 18,
  INVEST_PROPOSAL_CLAIM = 19,

  INSURANCE_STAKE = 20,
  INSURANCE_UNSTAKE = 21,

  INSURANCE_REGISTER_PROPOSAL_CLAIM = 22,

  TRADER_GET_PERFOMANCE_FEE = 23,
  USER_AGREED_TO_PRIVACY_POLICY = 24,
}

export function getEnumBigInt(operation: TransactionType): BigInt {
  return BigInt.fromI32(operation as i32);
}
