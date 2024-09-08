export interface EventResponseDto {
     eventId: string;
     eventName: string;
     eventNumber: number;
     description: string;
     objective: string;
     startDate: Date;
     startTime: string;
     endDate: Date;
     endTime: string; 
     country: string;
     department: string;
     city: string;
     assignedBudget: number;
     spentBudget?: number; 
     status: number;
     createdAt: Date;
     contractId: string;
     contractName: string;
     companyId: string;
     companyName: string;
     companyAcronym: string;
     operatorId: string;
     operatorName: string;  
     operatorAcronym: string;
  }
  