import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts";
import { ProposalSupply } from "../../../../generated/schema";

export function getProposalSupply(
  hash: Bytes,
  amount: BigInt = BigInt.zero(),
  token: Address = Address.zero(),
  InvestorInfoId: string = "",
  timestamp: BigInt = BigInt.zero()
): ProposalSupply {
  let id = hash.toHexString();
  let supply = ProposalSupply.load(id);

  if (supply == null) {
    supply = new ProposalSupply(id);
    supply.investor = InvestorInfoId;
    supply.amount = amount;
    supply.token = token;
    supply.day = "";
    supply.timestamp = timestamp;
  }

  return supply;
}
