export interface EventResponseDto {
    eventId: string;
    eventName: string;
    eventNumber: number;
    contractId: string;
    contractName: string;
    description: string;
    objective: string;
    createdAt: Date;     
    startDate: Date;    
    startTime: string;    
    endDate: Date;        
    endTime: string;      
    country: string;
    department: string;
    city: string;
    assignedBudget: number;
    spentBudget: number;
    status: number;      
  }
  