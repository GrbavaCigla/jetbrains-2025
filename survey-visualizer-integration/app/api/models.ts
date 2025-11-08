export interface Category {
  readonly id: number;
  name: string;
}

export interface GlobalCountItem {
  total_num_of_questions: number;
  total_num_of_pending_questions: number;
  total_num_of_verified_questions: number;
  total_num_of_rejected_questions: number;
}

export interface CategoryCountItem {
  category_id: number,
  total_question_count: number;
  total_easy_question_count: number;
  total_medium_question_count: number;
  total_hard_question_count: number;
}

export interface GlobalCount {
  overall: GlobalCountItem;
  categories: { [key: string]: GlobalCountItem };
}
