import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import CTASection from '../CTASection'

expect.extend(toHaveNoViolations)

const mockServices = [
  {
    title: "Sense-Making Partner",
    type: "freelance/fractional",
    description: "Transform fog into movement. Build sensing and decision systems fast.",
    cta: "Let's map your landscape"
  }
]

const mockCTA = {
  title: "If your organisation feels numb to what's changing — let's wake its senses.",
  description: "Whether you need pragmatic help, a long-term capability, or simply a conversation about what's emerging — reach out."
}

describe('CTASection Component', () => {
  it('renders the services', () => {
    render(<CTASection services={mockServices} cta={mockCTA} />)
    
    expect(screen.getByText(mockServices[0].title)).toBeInTheDocument()
    expect(screen.getByText(mockServices[0].description)).toBeInTheDocument()
  })

  it('renders the main CTA', () => {
    render(<CTASection services={mockServices} cta={mockCTA} />)
    
    expect(screen.getByText(mockCTA.title)).toBeInTheDocument()
    expect(screen.getByText(mockCTA.description)).toBeInTheDocument()
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<CTASection services={mockServices} cta={mockCTA} />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
