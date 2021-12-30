import { BigInt } from "@graphprotocol/graph-ts";
import { ProposalDivestHistoryInBasicPool } from "../../../../../generated/schema";
import { UNIX_DAY } from "../../../global/globals";

export function getProposalDivestHistoryInBasicPool(
  timestamp: BigInt,
  proposal: string
): ProposalDivestHistoryInBasicPool {
  let id = timestamp.div(BigInt.fromU32(UNIX_DAY));
  let history = ProposalDivestHistoryInBasicPool.load(id.toString());

  if (history == null) {
    history = new ProposalDivestHistoryInBasicPool(id.toString());

    history.totalDivestVolumeLP = BigInt.zero();
    history.totalDivestVolumeBase = BigInt.zero();
    history.proposal = proposal;
  }

  return history;
}