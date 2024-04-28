
import { showToast } from "../../../../functions/toast.mjs";

export const showQuizDualisticToast = isCorrect=>{
        
    showToast(
        isCorrect ? '回答正确' : '回答错误', 
        isCorrect ? 'success' : 'error'
    );
}