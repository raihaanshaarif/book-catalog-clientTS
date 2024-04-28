
import { useGetCommentsQuery, usePostCommentsMutation } from "@/Redux/books/bookApi";
import { ChangeEvent, FormEvent, useState } from "react";

interface IProps {
    id: string;
  }

const CommentCard = ({id}: IProps) => {

  const [inputValue, setInputValue] = useState<string>('');

    //Fetch Data
    const {data} = useGetCommentsQuery(id, {
      refetchOnMountOrArgChange: true,
      pollingInterval: 30000,
    }) 
   
   

    //Post data
    const [postComment] = usePostCommentsMutation()
    // console.log(isLoading);
    // console.log(isError);
    // console.log(isSuccess);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
      //  console.log("from Card",inputValue);
    
        const options = {
          id: id,
          data: { comments: inputValue },
        };
        console.log(options);
    
        postComment(options);
        setInputValue('');
      };
    
      const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue(event.target.value);
      };
   
    return (
        <div>
            <form className="join" onSubmit={handleSubmit}>
                <textarea className="input input-bordered join-item"  placeholder="Email" onChange={handleChange}
          value={inputValue}/>
                <button type="submit" className="btn join-item rounded-r-full">Subscribe</button>
            </form>    
            <div className="chat chat-start">
                {data?.data?.comments?.map((comment: string, index: number) => (
                <div key={index} className="flex gap- items-center mb-5">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <div className="chat-bubble">{comment}</div>
            </div>   
            ))}   
            </div>  
        </div>
    );
};

export default CommentCard;