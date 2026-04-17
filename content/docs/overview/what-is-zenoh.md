---
title: "What is Zenoh?"
weight: 1100
menu: 
    docs:
        parent: overview
---

Zenoh is the Next Big Thing in Internet Computing. You may think this is a bold statement, but hopefully after this short read you'll share the perspective.

Technically speaking,  Zenoh is a pub/sub/query protocol that unifies data in motion,  data at rest and computations.  That said, one way of thinking about Zenoh is to imagine it as a data liberator protocol. Zenoh liberates data in several dimensions.

**Cloud to the Microcontroller Communication.** Zenoh is the only protocol available on the market that can work efficiently and perform from server-grade hardware and networks to the embedded microcontroller and extremely constrained networks. As a consequence, Zenoh liberates the data allowing it to freely flow vertically and horizontally from the microcontroller to the data-center. Likewise, it liberates developers from the need to integrate technologies to bridge the communication between the enterprise and the embedded world..
  
**Data Centricity and Location Transparency for Data in Movement and at Rest.**  Since the introduction of Publish/Subscribe the world of data in movement has enjoyed location transparency. In other terms, the ability of receiving data without having to care about the location of the publisher.  Location transparency is a consequence of data centricity -- in these systems users only need to express interests without any concern on the location of its source. This feature is extremely important as it makes it easier to deal with scale, failures, and load-balancing. Zenoh is the first technology to bring location transparency for data at rest, allowing queries to be expressed without any concerns on the actual location of data, i.e. the location of the data-bases. It is Zenoh that takes care of identifying the optimal set of data bases available in  the network where the query should  be executed.

**Easy to Use and Performant.** Zenoh has been designed ground up to be simple to use and high-performance across all its applicability range. It constantly delivers higher throughput and lower latency and achieves that in a fraction of the code of competing protocols. This ensures that developers can be productive from day one and don't need to write brittle and unmaintainable code in order to get performance.

**Energy Efficient.** Few people are aware that communication is incredibly energivore. Think about the difference in the battery life of your mobile when surfing the internet. Now realize that the bulk of the energy that is being used is in the networks that connect you to the data-centers. Zenoh was designed for energy efficiency. This is reflected in its minimal wire-overhead of 4-6 bytes, and its support for exploiting locality in communication.

**Adopted by Next Generation Applications.** In spite of its young age, Zenoh has witnessed an incredibly swift adoption and is used today in next generation applications, such as, Robotics, Autonomous Vehicles, Internet Gaming, and Telecommunications. Specifically, in Robotics, Zenoh is emerging as the protocol of choice for Robot-to-Robot communication and  Internet-scale monitoring management and real-time teleoperation. Likewise, several Autonomous Vehicles and Mobility initiatives, such as [CARMA](https://discourse.ros.org/t/carma-migrating-to-ros-2-with-cyclonedds-and-zenoh/17541) and the [Indy Autonomous Challenge](https://www.indyautonomouschallenge.com),  have adopted Zenoh for Vehicle-to-Anything communication and in a growing number of cases as the only protocol used for on- and off- vehicle communication.

Zenoh has achieved all of this by extremely careful design and craftsmanship. It is the first protocol available on the market that has managed to integrate Internet-Scale Publish/ Subscribe with Geo-Distributed Queries. Thus, why not  [getting started](/docs/getting-started/first-app/) with it now?  

## The Genesis of Zenoh

Zenoh was conceived and designed by **Angelo Corsaro** — at the time CTO of PrismTech
and co-chair of the OMG Data Distribution Service (DDS) specification group — during
his work on extremely large-scale distributed systems for military, aerospace, and
smart-city projects.

### The problem with existing protocols

No single protocol at the time could span the full range of distributed systems:

- **DDS** offered excellent location transparency for *data in motion* (pub/sub) but
  could not scale up to Internet scope nor down to microcontrollers.
- **CoAP** was inherently cloud-centric and client/server.
- **MQTT** suffered from a broker paradox: two devices on the same local network still
  had to route communication through a remote cloud broker.

The critical missing piece was *location transparency for data at rest* — querying
geo-distributed storage without knowing where the data lives. The landscape was a
"Digital Frankenstein" of stitched-together protocol segments.

### The vision

Angelo designed Zenoh around three core properties:

1. **One protocol** from bare-metal microcontroller to data-center — no bridges or topology constraints.
2. **Unified abstractions** for data *in motion* (pub/sub), data *at rest* (geo-distributed queries),
   and *computations* (queryables / map-reduce).
3. **Flexible topology** — peer-to-peer, brokered, or any hybrid, decided at runtime.

### The name

*Zenoh* carries two layers of meaning:

- **Philosophical:** a tribute to *Zeno of Elea* (pre-Socratic philosopher, paradoxes of motion
  and infinity) and *Zeno of Citium* (founder of Stoicism — minimalism, disciplined design).
- **Acronym:** **Z**ero **E**ndpoint **N**etwork **O**verhead **H**andover — capturing the goal
  of zero unnecessary overhead at every layer.

Read the full origin story in [The Zenoh Report — February 2026](/zenoh-report/2026-02/).

### Further Reading
- [Zenoh Protocol Specification](https://spec.zenoh.io) for the formal definition of the wire format, protocol behaviour, and semantics.
- [Zenoh Book](https://corsaro.me/en/zenoh/book/) for a long-form guide to Zenoh architecture, concepts, and hands-on examples.
- [Zenoh Papers](https://corsaro.me/en/zenoh/papers/) for research papers, external evaluations, and academic references.
- [Zenoh for ROS 2](https://corsaro.me/en/zenoh/ros2/) for robotics-specific background and deployment considerations.
- [Zenoh as a DDS Alternative](https://corsaro.me/en/zenoh/dds-alternative/) for a concise comparison of where Zenoh fits relative to DDS.
- [The Zenoh Report](https://corsaro.me/en/zenoh/report/) for release notes, ecosystem highlights, and deployment-oriented writeups.
- [Zenoh: Unifying Communication, Storage and Computation from the Cloud to the Microcontroller](https://bit.ly/3P0DJ3N) for the core IEEE paper.
- [Taming the Dragon Webinar Series](https://www.youtube.com/playlist?list=PLZDEtJusUvAY04pwmpY8uqCG5iQ7NgSrR) for a guided video walkthrough.
- [Zenoh: The Genesis](https://www.youtube.com/watch?v=BryexPfh0Jc&t=898s) for the design story behind Zenoh.
- [Improving the Communication Layer of Robot Applications with ROS2 and Zenoh](https://www.youtube.com/watch?v=1NE8cU72frk) for a robotics-focused talk.
- [Zenoh and Edge Computing: A Perfect Marriage](https://www.youtube.com/watch?v=_NUP-ihrXjQ) for an edge/cloud deployment talk.
