import React, {useEffect, useState} from 'react';
import { TagsInput } from "react-tag-input-component";



const InputTag =()=> {

  const [tags, setTags] = useState(["Keywords Tag"]);



        return (
            <div>
                  <TagsInput
                  tags={tags}
                  value={tags}
                  />
            </div>
        )
    }

 
export default InputTag;