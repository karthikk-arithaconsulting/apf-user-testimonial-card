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
  const {
    title = "",
    author = "",
    authorSubtitle = "",
    description = "",
    cover = "",
    reverse = false,
    // eslint-disable-next-line react/prop-types
  } = { ...props?.data };

  return (
    <Card withBorder radius="md" p={0}>
      <Group
        wrap="nowrap"
        gap={0}
        p="md"
        style={{ flexDirection: reverse ? "row-reverse" : "row" }}
      >
        <Avatar src={cover} size={94} />
        <Box px="md">
          {title ? (
            <Text tt="uppercase" c="dimmed" fw={700} size="xs">
              {title}
            </Text>
          ) : null}
          {description ? (
            <Text mt="xs" mb="md">
              {description}
            </Text>
          ) : null}
          {author ? (
            <Box wrap="nowrap" gap="xs">
              <Text size="sm" fw={500}>
                {author}
              </Text>
              {authorSubtitle ? (
                <Text c="dimmed" fz="xs">
                  {authorSubtitle}
                </Text>
              ) : null}
            </Box>
          ) : null}
        </Box>
      </Group>
    </Card>
  );
}
