/* eslint-disable react/prop-types */
import React from "react";

import { Box, Card, Group, Text } from "@apf/core";
import { Image } from "@apf/core";

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
  return (
    <Card withBorder radius="md" p={0}>
      <Group
        wrap="nowrap"
        gap={0}
        p="md"
        style={{ flexDirection: reverse ? "row-reverse" : "row" }}
      >
        {userImg?.display === "block" && (
          <Image
            radius="50%"
            id={userImg?.id}
            src={userImg?.content?.src}
            h={userImg?.style?.height || "100"}
            w={userImg?.style?.width || "100"}
          />
        )}
        <Box px="md">
          {titleObj?.display === "block" ? (
            <Text
              tt="uppercase"
              // c="dimmed"
              w="fit-content"
              c={titleObj?.style?.font?.color || "dimmed"}
              fw={titleObj?.style?.font?.weight}
              style={{ backgroundColor: titleObj?.style?.backgroundColor }}
              size={titleObj?.style?.font?.size || "xs"}
              id={titleObj?.id}
            >
              {titleObj?.content?.value}
            </Text>
          ) : null}
          {descObj?.display === "block" ? (
            <Text
              mt="xs"
              id={descObj?.id}
              c={descObj?.style?.font?.color}
              fw={descObj?.style?.font?.weight}
              style={{ backgroundColor: descObj?.style?.backgroundColor }}
              size={descObj?.style?.font?.size}
            >
              {descObj?.content?.value}
            </Text>
          ) : null}
          {nameObj?.display === "block" ? (
            <Box wrap="nowrap" gap="xs" mt="md">
              <Text
                id={nameObj?.id}
                c={nameObj?.style?.font?.color}
                fw={nameObj?.style?.font?.weight || 500}
                style={{ backgroundColor: nameObj?.style?.backgroundColor }}
                size={nameObj?.style?.font?.size || "sm"}
                w="fit-content"
              >
                {nameObj?.content?.value}
              </Text>
              {authorSubtitle?.display === "block" ? (
                <Text
                  id={authorSubtitle?.id}
                  c={authorSubtitle?.style?.font?.color || "dimmed"}
                  fw={authorSubtitle?.style?.font?.weight || 500}
                  style={{
                    backgroundColor: authorSubtitle?.style?.backgroundColor,
                  }}
                  size={authorSubtitle?.style?.font?.size || "xs"}
                  w="fit-content"
                >
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
