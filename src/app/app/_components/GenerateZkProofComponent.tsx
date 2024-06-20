import { useState } from "react";
import { Loader2 } from "lucide-react";



interface ConnectorResponse {
	taskId: string;
	uHash: string;
	publicFieldsHash: string;
	validatorAddress: string;
	allocatorSignature: string;
	allocatorAddress: string;
	recipient: string;
	publicFields: any[];
	validatorSignature: string;
  }



const GenerateZkProofComponent = ({ goToPreviousStep, goToNextStep }) => {
    const [loading, setLoading] = useState<boolean>(false);
    
  return (
    <div>
      <h2>Generate ZK Proof</h2>
      {loading && <Loader2 className="animate-spin" size={20} />}
      <button onClick={goToNextStep}>Next</button>
      <button onClick={goToPreviousStep}>Back</button>
    </div>
  );
}

export default GenerateZkProofComponent;