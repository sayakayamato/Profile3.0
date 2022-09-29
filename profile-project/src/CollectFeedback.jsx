import React from "react";
import { useLocation } from "react-router-dom";
import { Textarea, Box, Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

import { TwitterIcon, TwitterShareButton } from "react-share";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

export function CollectFeedback() {
  //useLocationを使ってQuestionDetailContnetsからのstateを受け取る
  const state = useLocation().state;
  console.log(state);

  let [value, setValue] = useState("");

  useEffect(() => {
    if (state) setValue(state);
  }, []);

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };

  //ボタンを押したら送信モーダル
  const { isOpen, onOpen, onClose } = useDisclosure();

  //シェアボタン
  const url = "https://profile3-0-profile-project-onfm.vercel.app/Chats/0";

  return (
    <>
      <div className="collect_feedback_top">
        <Flex>
          <Box p="4" bg="" className="return_button">
            <Link to="/">
              <ChevronLeftIcon boxSize={6} />
            </Link>
          </Box>
          <Box p="4" bg="" className="profile_setting">
            フィードバック募集画面
          </Box>
        </Flex>
      </div>
      <Textarea
        value={value}
        onChange={handleInputChange}
        placeholder="例):私の長所を教えてください！"
        size="sm"
      />
      <button className="collect_feedback_button" onClick={onOpen}>
        送信
      </button>

      {/* 送信ボタンを押したら共有モーダル表示 */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>フィードバック募集を共有</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <TwitterShareButton
              url={url}
              title="フィードバックください！"
              via="Kill_In_Sun"
              related={["Kill_In_Sun", "GatsbyJS"]}
              // hashtags={post.frontmatter.tags}
            >
              <TwitterIcon size={50} round />
            </TwitterShareButton>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              閉じる
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
