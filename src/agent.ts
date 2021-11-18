import { 
  BlockEvent, 
  Finding, 
  HandleBlock, 
  FindingSeverity, 
  FindingType,
} from 'forta-agent'



const handleBlock: HandleBlock = async (blockEvent: BlockEvent) => {
  const findings: Finding[] = [];

  if (blockEvent.type !== 0){
    findings.push(Finding.fromObject({
      name: "CHAIN FORKED",
      description: `Firing reorg block # ${blockEvent.block.number}`,
      alertId: "FORTA-110",
      severity: FindingSeverity.Medium,
      type: FindingType.Info,
    }))
  }
 
  
  return findings;
}

export default {
  handleBlock
}