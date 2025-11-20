
export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'I\'m joining a $15,000 vibe coding hackathon to teach Software Engineering students',
    slug: 'vibe-coding-hackathon-soft-eng',
    excerpt: 'I\'m testing vibe coding as a solution to teaching Software Engineering at university by joining a hackathon.',
    date: 'November 20, 2025',
    content: `# I'm joining a $15,000 vibe coding hackathon to teach Software Engineering students

Software Engineering is a fundamental specialization in Computer Science programs. As instructors, one of the greatest challenges we face when teaching this subject is how to decouple the teaching of this discipline from programming. This course is typically taught in the early years, when students still don't understand the real role of a computer scientist beyond writing code. 

## The Problem

A civil engineer doesn't just calculate structures. A mechanical engineer has responsibilities beyond drawing components. Similarly, the software engineer must be capable of using a systematic, disciplined, and quantifiable approach to the development, operation, and maintenance of software. In essence, applying solid engineering principles to produce reliable, efficient, and maintainable software, as well as estimating the costs of its development. Conveying this idea is very complex.

Some of the fundamental content we try to teach includes:

1. Requirements (functional and non-functional), requirements analysis, and expression through user stories.
2. Functional analysis through: data flow diagrams, activity diagrams, entity-relationship diagrams, state transition diagrams, use cases, and prototypes.
3. Design and architecture. Structured design and design principles, UML diagrams, test-driven development. Interfaces and user experience. Integration architectures, components, development, and patterns.
4. Clean code, code reviews, debugging, analyzers, and testing. Verification and validation.
5. Deployment and DevOps.
6. Management, economics, and costs.
7. Development methodologies (SCRUM, RUP, etc.).

Although the curriculum is relatively extensive, we really only provide introductory glimpses of what students will study in depth in future courses.

To be able to address the different topics of the course through practical examples, a significant portion of lab time is "lost" teaching a programming language like Java. Unfortunately, many students get lost in this learning process, shifting their focus back toward programming rather than software engineering itself. How can we abstract software engineering from coding while still teaching concepts like deployment and clean code?

## The Proposal

The answer may lie in the recent phenomenon of vibe coding. As dangerous as the idea may seem to us that future computer scientists relegate all development to AI-based agents, the reality is that many of the companies we collaborate with already employ this practice. Rather than opposing the future that's coming, now more than ever we must train future computer scientists to apply software engineering processes rigorously and reliably. 

The thing is, prompting like "I want an app that checks the weather and tells me the best hours for surfing" isn't enough. Which actors will interact with your software? What requirements have you identified in the project? How will development phases and cycles be organized? Is the code maintainable? Answering all these questions (and many, many more) requires a systematic process; it can't be solved with a single prompt.

Taking advantage of the hackathon organized by [Bolt.new](https://bolt.new/) and [Half Baked](https://www.gethalfbaked.com/), I've decided to conduct an experiment. An experiment in which I'm going to apply software engineering processes to develop a real project through vibe coding. The goal: to build a complete, functional application as a traditional development team would, without writing code.

## What If It Works?

If everything goes well, the benefits will be twofold: on one hand, analyzing the limitations of vibe coding and how to tackle a real project by applying software engineering processes; on the other hand, providing my students with a tool on steroids with which to experience software engineering firsthand without having to master a programming language (yet). 

And of course, doing all of this openly so you can replicate (or copy) it as you please—#build-in-public. That way, if nothing works, I'll also be able to conduct an analysis of the mistakes made so no one else has to repeat them.

Oh, I almost forgot! What's my proposal about? Well, as an aviation and simulation enthusiast, I want to develop a cloud platform to orchestrate aerodynamic simulations of airfoils using potential flow methods without requiring advanced knowledge. In the next article, I'll talk more about this idea.`
  }/*,
  {
    id: 2,
    title: 'Digital Twins in Aerospace Engineering: A Case Study',
    slug: 'digital-twins-aerospace',
    excerpt: 'Exploring how digital twin technology is transforming aerospace engineering and aircraft maintenance.',
    date: 'March 15, 2024',
    content: `
# Digital Twins in Aerospace Engineering: A Case Study

Digital twin technology represents one of the most promising developments in aerospace engineering. By creating virtual replicas of physical systems, engineers can simulate, analyze, and optimize aircraft performance without physical testing. This blog post examines a case study in implementing digital twins for unmanned aerial vehicles.

## The Implementation Process

Our research team implemented a digital twin for a VTOL drone designed for urban package delivery. The implementation involved several key steps:

1. Creating detailed 3D models of all drone components
2. Developing accurate physics-based simulation of flight dynamics
3. Integrating real-time sensor data from the physical drone
4. Establishing bi-directional communication between the physical drone and its digital counterpart

## Results and Benefits

The digital twin implementation yielded several significant benefits:

- 35% reduction in prototype iterations
- Identification of structural weaknesses before physical testing
- Optimization of flight control parameters through simulation
- Predictive maintenance capabilities by analyzing simulated wear patterns

## Challenges Encountered

Despite its benefits, implementing the digital twin presented several challenges:

- Ensuring accurate data synchronization between physical and virtual systems
- Computational resource requirements for high-fidelity simulations
- Modeling environmental factors like wind and temperature effects
- Validating the digital twin against real-world performance

## Future Work

Our team continues to enhance the digital twin by incorporating machine learning algorithms to improve predictive capabilities and exploring methods to reduce computational requirements without sacrificing accuracy.

Digital twin technology represents a fundamental shift in how aerospace systems are designed, tested, and maintained. As this technology matures, we expect to see wider adoption across the aerospace industry, leading to more efficient development processes and more reliable aircraft.
    `
  },
  {
    id: 3,
    title: 'Aerodynamic Challenges in UAV Design',
    slug: 'aerodynamic-challenges-uav',
    excerpt: 'A technical analysis of the unique aerodynamic challenges encountered in designing small-scale unmanned aerial vehicles.',
    date: 'February 2, 2024',
    content: `
# Aerodynamic Challenges in UAV Design

Designing unmanned aerial vehicles (UAVs) presents unique aerodynamic challenges that differ significantly from those encountered in conventional aircraft design. This blog post examines these challenges and explores approaches to addressing them effectively.

## Low Reynolds Number Aerodynamics

Small UAVs typically operate at much lower Reynolds numbers than manned aircraft, resulting in flow characteristics that differ significantly from those predicted by traditional aerodynamic models. These differences include:

- Earlier flow separation
- Increased sensitivity to surface roughness
- Different lift and drag characteristics
- Reduced efficiency of control surfaces

## Compact Design Constraints

The need for compact, lightweight designs introduces several aerodynamic challenges:

- Interference between propulsion systems and control surfaces
- Complex wake interactions in multi-rotor configurations
- Limited space for smooth aerodynamic transitions
- Challenges in achieving adequate stability margins

## Solutions Through Computational Methods

Computational Fluid Dynamics (CFD) has become an essential tool in addressing these challenges, allowing designers to:

- Visualize complex flow patterns around small UAVs
- Optimize propeller placement to minimize interference
- Evaluate stability across the entire flight envelope
- Test novel airfoil designs tailored to low Reynolds number operation

## Practical Testing Approaches

Despite advances in computational methods, practical testing remains crucial. Our research employs several testing methodologies:

- Wind tunnel testing with scaled models
- Free-flight testing with instrumented prototypes
- Flow visualization techniques to validate computational predictions
- Iterative design refinement based on flight test data

By combining advanced computational methods with rigorous testing, UAV designers can overcome the unique aerodynamic challenges presented by these systems, leading to more efficient and capable unmanned aircraft.
    `
  }*/
];
