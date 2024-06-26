import { CONFIG } from "site.config"
import React from "react"
import { AiFillCodeSandboxCircle } from "react-icons/ai"
import styled from "@emotion/styled"
import { CardLink } from "src/components/CardLink"
import { Icon3dCubeSphere } from "@tabler/icons-react"

const ServiceCard: React.FC = () => {
  if (!CONFIG.projects) return null
  return (
    <>
      <StyledWrapper className="card">
      <StyledTitle>
        < Icon3dCubeSphere size="24" /> {CONFIG.projects.length > 1 ? "Projects" : "Project"}
      </StyledTitle>
        {CONFIG.projects.map((project, idx) => (
          <CardLink
            key={idx}
            href={`${project.href}`}
            rel="noreferrer"
          >
            <AiFillCodeSandboxCircle className="icon" />
            <div className="name">{project.name}</div>
          </CardLink>
        ))}
      </StyledWrapper>
    </>
  )
}

export default ServiceCard

const StyledTitle = styled.h3`
    display: flex;
    padding-top: 0.95rem;
    padding-left: 0.75rem;
    margin-bottom: 0.75rem;
    color: ${({ theme }) => theme.colors.gray11};
    >svg{
        margin-right: 0.5rem;
    }
`

const StyledWrapper = styled.div`
  display: flex;
  padding: 0.25rem;
  margin-bottom: 2.25rem;
  flex-direction: column;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.card};
  > a {
    display: flex;
    padding: 0.75rem;
    gap: 0.75rem;
    align-items: center;
    border-radius: 1rem;
    color: ${({ theme }) => theme.colors.gray11};
    cursor: pointer;

    :hover {
      color: ${({ theme }) => theme.colors.gray12};
    }
    .icon {
      font-size: 1.5rem;
      line-height: 2rem;
    }
    .name {
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
  }
`
