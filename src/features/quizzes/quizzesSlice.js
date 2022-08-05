import { createSlice } from '@reduxjs/toolkit'
import { addQuizId } from '../topics/topicsSlice';

export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {
            
        }
    },
    reducers: {
        addQuiz(state, action) {
            state.quizzes[action.payload.id] = action.payload;
        }
    }
})

export const addQuizAndQuizIdThunk = (obj) => {
    return (dispatch) => {
      // dispatch multiple actions here
        dispatch(addQuiz(obj))
        dispatch(addQuizId({quizId: obj.id , topicId: obj.topicId}))
    };
};

export const selectQuizzes = (state) => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions
export default quizzesSlice.reducer;