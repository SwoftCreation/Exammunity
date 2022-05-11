import React from "react";
import { Box, TextField } from "@mui/material";
import "./examSquare.css";
import { Button } from "reactstrap";
const ArticleForm = () => {
  return (
    <div className="ArticleFormDiv">
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": {
            width: "80vw",
            height: "50vh",
          },
        }}
      >
        <TextField
          id="outlined-multiline-static"
          label="게시글 작성"
          multiline
          rows={18}
          placeholder="게시물은 커뮤니티 운영방침에 따라서 사전통보없이 삭제될 수 있습니다."
        />
        <hr />
        <Button color="primary" style={{ marginRight: "10px" }}>
          등록하기
        </Button>
        <Button color="danger">취소</Button>
      </Box>
    </div>
  );
};

export default ArticleForm;
