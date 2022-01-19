import { Address, BigInt } from "@graphprotocol/graph-ts";
import { Exchange, Proposal } from "../../../../generated/schema";
import { getInvestTraderPool } from "../InvestTraderPool";

export function getProposal(
  index: BigInt,
  investPool: Address,
  timestampLimit: BigInt = BigInt.zero(),
  investLPLimit: BigInt = BigInt.zero()
): Proposal {
  let id = getInvestTraderPool(investPool).id.toString() + index.toString();
  let proposal = Proposal.load(id);

  if (proposal == null) {
    proposal = new Proposal(id);

    proposal.investorsCount = BigInt.zero();
    proposal.timestampLimit = timestampLimit;
    proposal.investLPLimit = investLPLimit;
    proposal.investPool = getInvestTraderPool(investPool).id;
  }

  return proposal;
}
