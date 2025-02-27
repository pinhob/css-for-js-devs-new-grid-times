import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import { QUERIES } from '../../constants';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <VerticalStoriesWrapper>
              <SecondaryStory key={story.id} {...story} />
            </VerticalStoriesWrapper>
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionListTabletWrapper>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStoriesWrapper>
              <OpinionStory key={story.id} {...story} />
            </OpinionStoriesWrapper>
          ))}
        </OpinionListTabletWrapper>
      </OpinionSection >

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-areas:
    'main-story secondary-stories'
    'advertisement advertisement'
    'opinion-stories opinion-stories';
    grid-template-columns: 2fr 1fr;
    gap: 48px 0;
  };

  @media ${QUERIES.laptopAndUp} {
    grid-template-areas:
    'main-story secondary-stories opinion-stories'
    'main-story advertisement advertisement';
    grid-template-columns: 5fr 4fr 3fr;
    gap: 0;
  };
`;

const MainStorySection = styled.section`
  grid-area: main-story;
  @media ${QUERIES.tabletAndUp} {
    padding-right: 16px;
  margin-right: 16px;
  border-right: 1px solid var(--color-gray-300);
  } 
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${QUERIES.laptopAndUp} {
    padding-right: 16px;
  margin-right: 16px;
  border-right: 1px solid var(--color-gray-300);
  } 
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const VerticalStoriesWrapper = styled.div`
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-gray-300);
    padding-bottom: 16px;
    margin-bottom: 16px;
  };

  @media ${QUERIES.tabletOnly} {
    &:not(:last-child) {
      border-bottom: none;
      padding-bottom: 0; 
    };
  } 
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;

  @media ${QUERIES.laptopAndUp} {
    margin-top: -8px;
  }
`;

const OpinionListTabletWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media ${QUERIES.tabletOnly} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
  }
`;

const OpinionStoriesWrapper = styled(VerticalStoriesWrapper)`
  @media ${QUERIES.tabletOnly} {
      &:not(:last-child) {
      border-bottom: none;
    };
    }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media ${QUERIES.laptopAndUp} {
    padding-top: 24px;
  margin-top: 24px;
  border-top: 1px solid var(--color-gray-300);
  } 
`;

export default MainStoryGrid;
