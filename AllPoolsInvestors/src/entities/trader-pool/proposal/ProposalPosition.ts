import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts";
import { ProposalPosition, ProposalContract, ProposalPositionOffset, Investor } from "../../../../generated/schema";

export function getProposalPosition(
  index: BigInt,
  proposalContract: ProposalContract,
  investor: Investor,
  proposalPositionOffset: ProposalPositionOffset
): ProposalPosition {
  let id =
    proposalContract.id.toHexString() +
    investor.id.toHexString() +
    index.toString() +
    "_" +
    proposalPositionOffset.offset.toString();
  let proposal = ProposalPosition.load(id);

  if (proposal == null) {
    proposal = new ProposalPosition(id);

    proposal.proposalContract = proposalContract.id;
    proposal.totalBaseOpenVolume = BigInt.zero();
    proposal.totalBaseCloseVolume = BigInt.zero();
    proposal.totalUSDOpenVolume = BigInt.zero();
    proposal.totalUSDCloseVolume = BigInt.zero();
    proposal.totalLPOpenVolume = BigInt.zero();
    proposal.totalLPCloseVolume = BigInt.zero();
    proposal.totalLP2OpenVolume = BigInt.zero();
    proposal.totalLP2CloseVolume = BigInt.zero();

    proposal.lastAmountsClaimed = new Array<BigInt>();
    proposal.lastTokensClaimed = new Array<Bytes>();

    proposal.isClosed = false;
  }

  return proposal;
}
