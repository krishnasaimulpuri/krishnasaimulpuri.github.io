import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsSection = styled.section`
  padding: 100px 50px;
  background-color: ${props => props.theme.background};

  @media (max-width: 768px) {
    padding: 80px 20px;
  }
`;

const ProjectsContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const SectionLabel = styled(motion.span)`
  font-size: 0.85rem;
  font-weight: 700;
  color: ${props => props.theme.primary};
  text-transform: uppercase;
  letter-spacing: 2px;
  display: block;
  margin-bottom: 12px;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 50px;
  color: ${props => props.theme.text};
  letter-spacing: -0.5px;
`;

const Timeline = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(
      to bottom,
      ${props => props.theme.gradientStart},
      ${props => props.theme.gradientEnd},
      transparent
    );

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const ExperienceItem = styled(motion.div)`
  position: relative;
  padding-left: 40px;
  margin-bottom: 40px;

  &::before {
    content: '';
    position: absolute;
    left: -5px;
    top: 8px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${props => props.theme.primary};
    border: 3px solid ${props => props.theme.background};
    box-shadow: 0 0 0 2px ${props => props.theme.primary};

    @media (max-width: 768px) {
      display: none;
    }
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

const ExperienceCard = styled.div`
  background: ${props => props.theme.cardBackground};
  border: 1px solid ${props => props.theme.border};
  border-radius: 12px;
  padding: 28px;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${props => props.theme.primary};
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06);
    transform: translateY(-2px);
  }
`;

const ExperienceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
  flex-wrap: wrap;
  gap: 8px;
`;

const ExperienceInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const CompanyLogo = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 10px;
  object-fit: contain;
  flex-shrink: 0;
`;

const ExperienceText = styled.div``;

const ExperienceTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${props => props.theme.text};
  margin-bottom: 4px;
`;

const ExperienceCompany = styled.span`
  font-size: 1rem;
  color: ${props => props.theme.primary};
  font-weight: 600;
`;

const ExperienceDate = styled.span`
  font-size: 0.85rem;
  color: ${props => props.theme.secondary};
  background: ${props => props.theme.sectionAlt};
  padding: 4px 12px;
  border-radius: 6px;
  font-weight: 500;
  white-space: nowrap;
`;

const ExperienceDescription = styled.div`
  color: ${props => props.theme.secondary};
  line-height: 1.7;
  font-size: 0.95rem;

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 10px;
    padding-left: 20px;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 10px;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: ${props => props.theme.primary};
      opacity: 0.6;
    }
  }
`;


const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Projects: React.FC = () => {
  return (
    <ProjectsSection id="experience">
      <ProjectsContent>
        <SectionLabel
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Career
        </SectionLabel>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Professional Experience
        </SectionTitle>

        <Timeline>
          <ExperienceItem
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <ExperienceCard>
              <ExperienceHeader>
                <ExperienceInfo>
                  <CompanyLogo src={"/logos/oracle.svg"} alt="Oracle" />
                  <ExperienceText>
                    <ExperienceTitle>Senior Software Engineer</ExperienceTitle>
                    <ExperienceCompany>Oracle</ExperienceCompany>
                  </ExperienceText>
                </ExperienceInfo>
                <ExperienceDate>Mar 2020 - Present</ExperienceDate>
              </ExperienceHeader>
              <ExperienceDescription>
                <ul>
                  <li>Led design and implementation of distributed tracing for Oracle NetSuite ERP using Jaeger; delivered internal libraries, APIs, and developer guidelines that improved platform-wide observability across 100+ microservices.</li>
                  <li>Deployed and operated distributed OpenSearch clusters across multiple OCI regions (local, regional, global), increasing data availability and query performance for NetSuite ERP at enterprise scale.</li>
                  <li>Architected and shipped an AI-assisted code review pipeline using OpenAI Codex, reducing manual code inspection time by ~30% and surfacing recurring anti-patterns across the engineering org.</li>
                  <li>Integrated Codex-powered natural-language query interface into the Anomaly Detection platform, enabling non-technical stakeholders to explore telemetry data without writing custom queries.</li>
                  <li>Redesigned the Anomaly Detection tool end-to-end: new RESTful APIs, updated database schema, automated data migration from legacy system, and rebuilt the UI in ReactJS with OpenID Connect SSO.</li>
                  <li>Contributed to the open-source Terraform Provider for OCI — added support for new OCI services and extended existing service resources, coordinating with internal and community stakeholders.</li>
                  <li>Built a Unified Analytics Data Platform on OCI to track developer adoption and user engagement: pipeline infrastructure (Terraform), business logic (Spark/Java), and a monitoring framework using OCI SDKs.</li>
                  <li>Developed Control Plane APIs and Scheduled Task services to manage ad-hoc and recurring operational tasks programmatically, improving SRE toil reduction across multiple product teams.</li>
                </ul>
              </ExperienceDescription>
            </ExperienceCard>
          </ExperienceItem>

          <ExperienceItem
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <ExperienceCard>
              <ExperienceHeader>
                <ExperienceInfo>
                  <CompanyLogo src={"/logos/cisco.svg"} alt="Cisco" />
                  <ExperienceText>
                    <ExperienceTitle>Software Engineer</ExperienceTitle>
                    <ExperienceCompany>Cisco Systems</ExperienceCompany>
                  </ExperienceText>
                </ExperienceInfo>
                <ExperienceDate>Feb 2018 - Feb 2020</ExperienceDate>
              </ExperienceHeader>
              <ExperienceDescription>
                <ul>
                  <li>Designed and implemented a high-availability messaging framework using ZeroMQ for Cisco NGFW device clustering, handling failover and message delivery guarantees at hardware line rate.</li>
                  <li>Built REST APIs in Java with a Neo4J backend to manage core firewall operations, supporting the policy model for Firepower NGFW devices.</li>
                  <li>Contributed to hardware platform bring-up for Firepower 1010, 1120, and 1140 NGFW devices, collaborating across firmware, OS, and application layers.</li>
                  <li>Profiled and resolved performance bottlenecks in critical firewall components; wrote scenario-based integration tests using the Behave (Python) BDD framework.</li>
                  <li>Designed traffic reporting algorithms for Cisco NGFW devices using Java and Apache Lucene to generate trend reports from device traffic data.</li>
                </ul>
              </ExperienceDescription>
            </ExperienceCard>
          </ExperienceItem>

          <ExperienceItem
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <ExperienceCard>
              <ExperienceHeader>
                <ExperienceInfo>
                  <CompanyLogo src={"/logos/pega.svg"} alt="Pegasystems" />
                  <ExperienceText>
                    <ExperienceTitle>Software Engineer</ExperienceTitle>
                    <ExperienceCompany>Pegasystems</ExperienceCompany>
                  </ExperienceText>
                </ExperienceInfo>
                <ExperienceDate>Jul 2013 - Dec 2015</ExperienceDate>
              </ExperienceHeader>
              <ExperienceDescription>
                <ul>
                  <li>Built a custom Apache CXF framework to expose Pega platform core services via standardized external APIs, adopted across multiple enterprise customer integrations.</li>
                  <li>Implemented SAML 2.0-based Single Sign-On and integrated the OpenCMIS client API to route document attachments to external Content Management Systems.</li>
                  <li>Analyzed and improved runtime performance of key product components through profiling and targeted code optimization, reducing p99 latency for core API paths.</li>
                </ul>
              </ExperienceDescription>
            </ExperienceCard>
          </ExperienceItem>
        </Timeline>
      </ProjectsContent>
    </ProjectsSection>
  );
};

export default Projects;
