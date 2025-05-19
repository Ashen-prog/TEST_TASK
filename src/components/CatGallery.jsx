import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import catSilhouette from "../assets/cat.png";

const GalleryWrapper = styled.section`
  width: 100%;
  min-height: 40vh;
  background: linear-gradient(135deg, #e0e7ff 0%, #f7f7fb 100%);
  padding: 16px 10px 12px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 32px;
  box-shadow: 0 8px 40px rgba(60,60,120,0.13);
`;

const Controls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 18px;
  width: 480px;
  max-width: 98vw;
`;

const CheckboxLabel = styled.label`
  font-size: 1.1rem;
  color: #222;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif;
  user-select: none;
`;

const Checkbox = styled.input`
  margin-right: 8px;
  accent-color: #222;
`;

const StyledButton = styled.button`
  width: 100%;
  margin: 12px 0 18px 0;
  padding: 12px 0;
  font-size: 1.15rem;
  font-weight: 500;
  border-radius: 6px;
  border: 1px solid #bbb;
  background: linear-gradient(180deg, #f9f9f9 0%, #e0e7ff 100%);
  color: #222;
  box-shadow: 0 2px 8px rgba(60,60,120,0.06);
  cursor: pointer;
  transition: background 0.18s, border-color 0.18s;
  &:hover {
    background: linear-gradient(180deg, #e0e7ff 0%, #f9f9f9 100%);
    border-color: #b4b8f8;
  }
  &:active {
    background: #e0e7ff;
  }
`;

const CatImage = styled.img`
  width: 440px;
  max-width: 95vw;
  height: 80%;
  object-fit: contain;
  background: #e0e7ff;
  border-radius: 12px;
  margin-top: 12px;
  box-shadow: 0 4px 24px rgba(60,60,120,0.10);
`;

const Placeholder = styled.div`
  width: 440px;
  max-width: 95vw;
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e0e7ff;
  border-radius: 12px;
  margin-top: 12px;
`;

const CatSilhouette = styled.img`
  max-width: 95%;
  max-height: 95%;
  object-fit: contain;
  display: block;
  margin: 0 auto;
`;

export default function CatGallery() {
  const [enabled, setEnabled] = useState(true);
  const [autoRefresh, setAutoRefresh] = useState(false);
  const [cat, setCat] = useState(null);
  const [loading, setLoading] = useState(false);
  const intervalRef = useRef(null);

  const fetchCat = () => {
    setLoading(true);
    fetch("https://api.thecatapi.com/v1/images/search?limit=1")
      .then(res => res.json())
      .then(data => {
        setCat(data[0]);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (enabled) fetchCat();
    // eslint-disable-next-line
  }, [enabled]);

  useEffect(() => {
    if (autoRefresh && enabled) {
      intervalRef.current = setInterval(fetchCat, 5000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [autoRefresh, enabled]);

  const handleEnabled = e => {
    setEnabled(e.target.checked);
    if (!e.target.checked) {
      setCat(null);
      setAutoRefresh(false);
    }
  };

  const handleAutoRefresh = e => {
    setAutoRefresh(e.target.checked);
  };

  return (
    <GalleryWrapper>
      <Controls>
        <CheckboxLabel>
          <Checkbox
            type="checkbox"
            checked={enabled}
            onChange={handleEnabled}
          />
          Enabled
        </CheckboxLabel>
        <CheckboxLabel>
          <Checkbox
            type="checkbox"
            checked={autoRefresh}
            onChange={handleAutoRefresh}
            disabled={!enabled}
          />
          Auto-refresh every 5 second
        </CheckboxLabel>
        <StyledButton onClick={fetchCat} disabled={!enabled || loading}>
          {loading ? "Загрузка..." : "Get cat"}
        </StyledButton>
      </Controls>
      {enabled && cat ? (
        <CatImage src={cat.url} alt="cat" />
      ) : (
        <Placeholder>
          <CatSilhouette src={catSilhouette} alt="Cat" />
        </Placeholder>
      )}
    </GalleryWrapper>
  );
}