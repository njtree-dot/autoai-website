
export interface AutomationSuggestion {
  title: string;
  description: string;
  impact: string;
}

export interface AutomationResponse {
  suggestions: AutomationSuggestion[];
}
