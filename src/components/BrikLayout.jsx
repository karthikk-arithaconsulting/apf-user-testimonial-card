/* eslint-disable react/prop-types */
import { BrikWrapper } from "@apf/brik-wrapper";
import { ThemeContextProvider } from "@apf/core";
import React, { useState } from "react";
import { AppWrapper, useProjectJSON } from "@apf/playground";
import "@apf/playground/dist/style.css";
import UserTestimonialCard from "./UserTestimonialCard";

function BrikLayout() {
  const [brikId, setBrikId] = useState("");
  const [selectedElementId, setSelectedElementId] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const projectData = useProjectJSON();

  const handleClick = (bId, eId = null) => {
    setBrikId(bId);
    if (eId) {
      setSelectedElementId(eId);
    } else setSelectedElementId("");
  };

  return (
    <ThemeContextProvider>
      <AppWrapper
        isBrik={true}
        brikId={brikId}
        selectedElementId={selectedElementId}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        <BrikWrapper
          handleClick={handleClick}
          data={
            projectData?.project?.pages?.[0]?.pageData[0]?.cols[0]?.colData[0]
          }
        >
          <UserTestimonialCard
            data={
              projectData?.project?.pages?.[0]?.pageData[0]?.cols[0]?.colData[0]
            }
          />
        </BrikWrapper>
      </AppWrapper>
    </ThemeContextProvider>
  );
}

export default BrikLayout;
