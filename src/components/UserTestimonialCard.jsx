import React from "react";

import { Avatar, Box, Card, Group, Text } from "@apf/core";

/**
 * UserTestimonialCard is a component that renders a user testimonial card.
 *
 * @param {Object} props.data - Component data props.
 * @param {string} props.data.title - The article title.
 * @param {string} props.data.author - The article author.
 * @param {string} props.data.authorSubtitle - The article author subtitle.
 * @param {string} props.data.description - The article description.
 * @param {string} props.data.cover - The article cover image.
 * @param {string} props.data.reverse - Swap the card direction.
 */
export default function UserTestimonialCard(props) {
  let titleObj;
  let descObj;
  let nameObj;
  let authorSubtitle;
  let userImg;

  props.data?.data?.forEach((eleobj) => {
    if (eleobj?.content?.for === "title") {
      titleObj = eleobj;
    }
    // if (eleobj?.content?.type === "text") {
    //   textObj = eleobj;
    // }
    if (eleobj?.content?.for === "author") {
      nameObj = eleobj;
    }
    if (eleobj?.content?.for === "authorSubtitle") {
      authorSubtitle = eleobj;
    }
    if (eleobj?.content?.for === "description") {
      descObj = eleobj;
    }
    if (eleobj?.content?.type === "img") {
      userImg = eleobj;
    }
  });
  const reverse = false;
  // console.log("data", titleObj, props?.data?.data);
  return (
    <Card withBorder radius="md" p={0}>
      <Group
        wrap="nowrap"
        gap={0}
        p="md"
        style={{ flexDirection: reverse ? "row-reverse" : "row" }}
      >
        {userImg?.display === "block" && (
          <Avatar src={userImg?.content?.value} size={94} />
        )}
        <Box px="md">
          {titleObj?.display === "block" ? (
            <Text
              tt="uppercase"
              c="dimmed"
              fw={700}
              size="xs"
              id={titleObj?.id}
            >
              {titleObj?.content?.value}
            </Text>
          ) : null}
          {descObj?.display === "block" ? (
            <Text mt="xs" id={descObj?.id}>
              {descObj?.content?.value}
            </Text>
          ) : null}
          {nameObj?.display === "block" ? (
            <Box wrap="nowrap" gap="xs" mt="md">
              <Text size="sm" fw={500} id={nameObj?.id}>
                {nameObj?.content?.value}
              </Text>
              {authorSubtitle?.display === "block" ? (
                <Text c="dimmed" fz="xs">
                  {authorSubtitle?.content?.value}
                </Text>
              ) : null}
            </Box>
          ) : null}
        </Box>
      </Group>
    </Card>
  );
}
