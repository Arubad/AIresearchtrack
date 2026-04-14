export const phases = [
  {
    id: "phase1",
    title: "Phase 1 — DL Fundamentals, RAG & GANs",
    subtitle: "Conceptual Fluency",
    duration: "7 Days",
    color: "blue",
    days: [
      {
        day: 1,
        title: "Deep Learning Foundations: Neural Networks & Backpropagation",
        objective:
          "Understand how neural networks learn via backpropagation. Build a solid mental model of forward pass, loss computation, and gradient flow that every subsequent paper will assume.",
        targets: [
          "Derive the chain rule as it applies to multi-layer networks",
          "Explain vanishing/exploding gradients and why they matter",
          "Understand weight initialization schemes (Xavier, He)",
          "Describe batch normalization's role in training stability",
        ],
        papers: [
          {
            title: "Learning Representations by Back-propagating Errors (Rumelhart, Hinton & Williams, 1986)",
            url: "https://www.nature.com/articles/323533a0",
            type: "Foundational Paper",
          },
          {
            title: "Deep Learning Book — Chapters 6 & 7 (Goodfellow, Bengio, Courville)",
            url: "https://www.deeplearningbook.org/contents/mlp.html",
            type: "Textbook",
          },
          {
            title: "Batch Normalization: Accelerating Deep Network Training (Ioffe & Szegedy, 2015)",
            url: "https://arxiv.org/abs/1502.03167",
            type: "arXiv",
          },
          {
            title: "cs231n Lecture Notes — Neural Networks",
            url: "https://cs231n.github.io/neural-networks-1/",
            type: "Lecture Notes",
          },
        ],
      },
      {
        day: 2,
        title: "CNNs, RNNs & Sequence Modeling",
        objective:
          "Understand the inductive biases of convolutional and recurrent architectures. Know why CNNs dominate vision and where RNNs fail, motivating the need for attention.",
        targets: [
          "Explain convolution, pooling, receptive fields in CNNs",
          "Trace the gradient through an LSTM cell",
          "Understand why vanilla RNNs struggle with long sequences",
          "Compare ResNet skip connections with highway networks",
        ],
        papers: [
          {
            title: "ImageNet Classification with Deep CNNs — AlexNet (Krizhevsky et al., 2012)",
            url: "https://papers.nips.cc/paper_files/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html",
            type: "Foundational Paper",
          },
          {
            title: "Deep Residual Learning for Image Recognition — ResNet (He et al., 2015)",
            url: "https://arxiv.org/abs/1512.03385",
            type: "arXiv",
          },
          {
            title: "Long Short-Term Memory (Hochreiter & Schmidhuber, 1997)",
            url: "https://www.bioinf.jku.at/publications/older/2604.pdf",
            type: "Foundational Paper",
          },
          {
            title: "cs231n Lecture Notes — CNNs",
            url: "https://cs231n.github.io/convolutional-networks/",
            type: "Lecture Notes",
          },
        ],
      },
      {
        day: 3,
        title: "Attention Mechanism & the Transformer",
        objective:
          "Fully internalize the Transformer architecture — multi-head self-attention, positional encoding, encoder-decoder stacks. This is the backbone of everything in modern AI.",
        targets: [
          "Derive scaled dot-product attention from scratch",
          "Explain why positional encoding is needed and how it works",
          "Describe multi-head attention and what each head may learn",
          "Understand why Transformers scale better than RNNs",
        ],
        papers: [
          {
            title: "Attention Is All You Need (Vaswani et al., 2017)",
            url: "https://arxiv.org/abs/1706.03762",
            type: "arXiv",
          },
          {
            title: "Neural Machine Translation by Jointly Learning to Align and Translate — Bahdanau Attention (Bahdanau et al., 2014)",
            url: "https://arxiv.org/abs/1409.0473",
            type: "arXiv",
          },
          {
            title: "The Illustrated Transformer (Jay Alammar)",
            url: "https://jalammar.github.io/illustrated-transformer/",
            type: "Blog / Visual Guide",
          },
          {
            title: "BERT: Pre-training of Deep Bidirectional Transformers (Devlin et al., 2018)",
            url: "https://arxiv.org/abs/1810.04805",
            type: "arXiv",
          },
        ],
      },
      {
        day: 4,
        title: "RAG — Retrieval-Augmented Generation Fundamentals",
        objective:
          "Understand why LLMs alone have knowledge gaps, and how RAG closes them by grounding generation in retrieved documents. Master dense vs. sparse retrieval and the retrieval-then-generate pipeline.",
        targets: [
          "Explain the motivation for RAG over pure parametric memory",
          "Contrast BM25 (sparse) with DPR (dense) retrieval",
          "Trace the full RAG pipeline: query → retrieve → augment → generate",
          "Understand how document chunking affects retrieval quality",
        ],
        papers: [
          {
            title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks (Lewis et al., 2020)",
            url: "https://arxiv.org/abs/2005.11401",
            type: "arXiv",
          },
          {
            title: "Dense Passage Retrieval for Open-Domain QA — DPR (Karpukhin et al., 2020)",
            url: "https://arxiv.org/abs/2004.04906",
            type: "arXiv",
          },
          {
            title: "REALM: Retrieval-Augmented Language Model Pre-Training (Guu et al., 2020)",
            url: "https://arxiv.org/abs/2002.08909",
            type: "arXiv",
          },
          {
            title: "Precise Zero-Shot Dense Retrieval without Relevance Labels — HyDE (Gao et al., 2022)",
            url: "https://arxiv.org/abs/2212.10496",
            type: "arXiv",
          },
        ],
      },
      {
        day: 5,
        title: "Advanced RAG — Chunking, Re-ranking & Agentic RAG",
        objective:
          "Move beyond naive RAG. Understand failure modes (lost-in-the-middle, context overflow, retrieval drift) and the techniques that fix them: re-ranking, query rewriting, hierarchical indexing, and agentic loops.",
        targets: [
          "Explain why naive RAG fails on multi-hop questions",
          "Describe cross-encoder re-ranking and its latency trade-off",
          "Understand RAPTOR's recursive summarization approach",
          "Sketch an agentic RAG loop with tool use",
        ],
        papers: [
          {
            title: "Self-RAG: Learning to Retrieve, Generate and Critique (Asai et al., 2023)",
            url: "https://arxiv.org/abs/2310.11511",
            type: "arXiv",
          },
          {
            title: "RAPTOR: Recursive Abstractive Processing for Tree-Organized Retrieval (Sarthi et al., 2024)",
            url: "https://arxiv.org/abs/2401.18059",
            type: "arXiv",
          },
          {
            title: "Lost in the Middle: How Language Models Use Long Contexts (Liu et al., 2023)",
            url: "https://arxiv.org/abs/2307.03172",
            type: "arXiv",
          },
          {
            title: "Corrective Retrieval Augmented Generation — CRAG (Yan et al., 2024)",
            url: "https://arxiv.org/abs/2401.15884",
            type: "arXiv",
          },
        ],
      },
      {
        day: 6,
        title: "GANs — Generative Adversarial Networks Fundamentals",
        objective:
          "Understand the generator-discriminator minimax game. Know why GAN training is unstable, what mode collapse is, and how conditional GANs extend the framework to controlled generation.",
        targets: [
          "Derive the original GAN objective and its Nash equilibrium",
          "Explain mode collapse and training instability",
          "Understand how DCGANs add architectural stability",
          "Describe conditional GANs and class conditioning",
        ],
        papers: [
          {
            title: "Generative Adversarial Networks (Goodfellow et al., 2014)",
            url: "https://arxiv.org/abs/1406.2661",
            type: "arXiv",
          },
          {
            title: "Conditional Generative Adversarial Nets (Mirza & Osindero, 2014)",
            url: "https://arxiv.org/abs/1411.1784",
            type: "arXiv",
          },
          {
            title: "Unsupervised Representation Learning with Deep CNNs — DCGAN (Radford et al., 2015)",
            url: "https://arxiv.org/abs/1511.06434",
            type: "arXiv",
          },
          {
            title: "NIPS 2016 Tutorial: Generative Adversarial Networks (Goodfellow, 2016)",
            url: "https://arxiv.org/abs/1701.00160",
            type: "arXiv",
          },
        ],
      },
      {
        day: 7,
        title: "Advanced GANs — StyleGAN, Wasserstein & Pix2Pix",
        objective:
          "Understand the fixes to original GAN instability (Wasserstein distance), image-to-image translation, and progressive/style-based generation. Know where GANs remain competitive vs. diffusion.",
        targets: [
          "Explain why Wasserstein distance provides better gradients than JS divergence",
          "Understand progressive growing and why it stabilizes high-res synthesis",
          "Describe StyleGAN's style mixing and AdaIN normalization",
          "Contrast Pix2Pix (paired) vs. CycleGAN (unpaired) translation",
        ],
        papers: [
          {
            title: "Wasserstein GAN (Arjovsky et al., 2017)",
            url: "https://arxiv.org/abs/1701.07875",
            type: "arXiv",
          },
          {
            title: "Progressive Growing of GANs (Karras et al., 2018)",
            url: "https://arxiv.org/abs/1710.10196",
            type: "arXiv",
          },
          {
            title: "A Style-Based Generator Architecture for GANs — StyleGAN (Karras et al., 2019)",
            url: "https://arxiv.org/abs/1812.04948",
            type: "arXiv",
          },
          {
            title: "Image-to-Image Translation with Conditional Adversarial Networks — Pix2Pix (Isola et al., 2017)",
            url: "https://arxiv.org/abs/1611.07004",
            type: "arXiv",
          },
        ],
      },
    ],
  },
  {
    id: "phase2a",
    title: "Phase 2A — Generative AI: VAEs, Diffusion, LLMs & RLHF",
    subtitle: "Architectural Depth",
    duration: "10 Days",
    color: "purple",
    days: [
      {
        day: 8,
        title: "Variational Autoencoders — ELBO & the Reparameterization Trick",
        objective:
          "Understand VAEs as probabilistic generative models. Master the ELBO derivation, why the reparameterization trick enables backprop through stochastic nodes, and what the KL term does to the latent space.",
        targets: [
          "Derive the Evidence Lower BOund (ELBO) from first principles",
          "Explain the reparameterization trick and why it enables gradient flow",
          "Describe what the KL divergence term regularizes in the latent space",
          "Understand posterior collapse and when it occurs",
        ],
        papers: [
          {
            title: "Auto-Encoding Variational Bayes (Kingma & Welling, 2013)",
            url: "https://arxiv.org/abs/1312.6114",
            type: "arXiv",
          },
          {
            title: "An Introduction to Variational Autoencoders (Kingma & Welling, 2019)",
            url: "https://arxiv.org/abs/1906.02691",
            type: "arXiv",
          },
          {
            title: "Tutorial on Variational Autoencoders (Doersch, 2016)",
            url: "https://arxiv.org/abs/1606.05908",
            type: "arXiv",
          },
        ],
      },
      {
        day: 9,
        title: "Advanced VAEs — β-VAE, VQ-VAE & Disentanglement",
        objective:
          "Understand how VAE variants tackle the blurriness problem and achieve disentangled, interpretable latent spaces. VQ-VAE's discrete codebook is the backbone of modern image tokenizers.",
        targets: [
          "Explain how β-VAE enforces disentanglement via KL weight",
          "Describe VQ-VAE's vector quantization and straight-through estimator",
          "Understand why discrete latents (VQ-VAE) produce sharper samples than Gaussian VAEs",
          "Know how VQ-VAE-2 achieves high-resolution generation",
        ],
        papers: [
          {
            title: "β-VAE: Learning Basic Visual Concepts with a Constrained Variational Framework (Higgins et al., 2017)",
            url: "https://openreview.net/forum?id=Sy2fchgI",
            type: "OpenReview",
          },
          {
            title: "Neural Discrete Representation Learning — VQ-VAE (van den Oord et al., 2017)",
            url: "https://arxiv.org/abs/1711.00937",
            type: "arXiv",
          },
          {
            title: "Generating Diverse High-Fidelity Images with VQ-VAE-2 (Razavi et al., 2019)",
            url: "https://arxiv.org/abs/1906.00446",
            type: "arXiv",
          },
          {
            title: "InfoVAE: Balancing Learning and Inference in VAEs (Zhao et al., 2017)",
            url: "https://arxiv.org/abs/1706.02262",
            type: "arXiv",
          },
        ],
      },
      {
        day: 10,
        title: "Score-Based Generative Models & SDEs",
        objective:
          "Understand score-based generation as an alternative to VAEs and GANs: learn the gradient of the data density, then sample by following it (Langevin dynamics). This is the mathematical foundation of diffusion models.",
        targets: [
          "Define the score function and why learning it enables sampling",
          "Understand Langevin dynamics as a sampling algorithm",
          "Explain denoising score matching as a tractable training objective",
          "Grasp how SDEs unify score-based and diffusion models",
        ],
        papers: [
          {
            title: "Generative Modeling by Estimating Gradients of the Data Distribution (Song & Ermon, 2019)",
            url: "https://arxiv.org/abs/1907.05600",
            type: "arXiv",
          },
          {
            title: "Score-Based Generative Modeling through Stochastic Differential Equations (Song et al., 2020)",
            url: "https://arxiv.org/abs/2011.13456",
            type: "arXiv",
          },
          {
            title: "A Connection Between Score Matching and Denoising Autoencoders (Vincent, 2011)",
            url: "http://www.iro.umontreal.ca/~vincentp/Publications/smdae_techreport.pdf",
            type: "Technical Report",
          },
        ],
      },
      {
        day: 11,
        title: "Denoising Diffusion Probabilistic Models (DDPM)",
        objective:
          "Understand the forward (noising) and reverse (denoising) processes of DDPM. Know the simplified training objective, the noise schedule, and how DDPM connects to score-based models.",
        targets: [
          "Describe the forward Markov chain and its closed-form marginals",
          "Derive the simplified DDPM training loss (predict noise)",
          "Explain the role of the variance schedule (linear, cosine)",
          "Understand how improved DDPM achieves better log-likelihoods",
        ],
        papers: [
          {
            title: "Denoising Diffusion Probabilistic Models (Ho et al., 2020)",
            url: "https://arxiv.org/abs/2006.11239",
            type: "arXiv",
          },
          {
            title: "Improved Denoising Diffusion Probabilistic Models (Nichol & Dhariwal, 2021)",
            url: "https://arxiv.org/abs/2102.09672",
            type: "arXiv",
          },
          {
            title: "Understanding Diffusion Models: A Unified Perspective (Luo, 2022)",
            url: "https://arxiv.org/abs/2208.11970",
            type: "arXiv",
          },
        ],
      },
      {
        day: 12,
        title: "DDIM, Guided Diffusion & Classifier-Free Guidance",
        objective:
          "Learn how DDIM accelerates sampling deterministically, how classifier guidance steers generation toward desired classes, and why classifier-free guidance became the dominant conditioning method.",
        targets: [
          "Explain how DDIM reformulates the reverse process as deterministic",
          "Understand classifier guidance: gradient of log p(y|x_t) steers trajectory",
          "Describe classifier-free guidance and the trade-off with guidance scale",
          "Know why CFG outperformed classifier guidance practically",
        ],
        papers: [
          {
            title: "Denoising Diffusion Implicit Models — DDIM (Song et al., 2020)",
            url: "https://arxiv.org/abs/2010.02502",
            type: "arXiv",
          },
          {
            title: "Diffusion Models Beat GANs on Image Synthesis (Dhariwal & Nichol, 2021)",
            url: "https://arxiv.org/abs/2105.05233",
            type: "arXiv",
          },
          {
            title: "Classifier-Free Diffusion Guidance (Ho & Salimans, 2022)",
            url: "https://arxiv.org/abs/2207.12598",
            type: "arXiv",
          },
        ],
      },
      {
        day: 13,
        title: "Stable Diffusion & Latent Diffusion Models",
        objective:
          "Understand how moving diffusion into a compressed latent space (via VQ-VAE encoder) makes high-resolution generation tractable. Know the role of CLIP text conditioning and cross-attention in Stable Diffusion.",
        targets: [
          "Explain why operating in latent space reduces compute vs. pixel-space diffusion",
          "Describe the role of the VQ-regularized autoencoder in LDMs",
          "Understand CLIP text embeddings and cross-attention conditioning",
          "Know the components of the Stable Diffusion pipeline",
        ],
        papers: [
          {
            title: "High-Resolution Image Synthesis with Latent Diffusion Models (Rombach et al., 2022)",
            url: "https://arxiv.org/abs/2112.10752",
            type: "arXiv",
          },
          {
            title: "CLIP: Learning Transferable Visual Models From Natural Language (Radford et al., 2021)",
            url: "https://arxiv.org/abs/2103.00020",
            type: "arXiv",
          },
          {
            title: "Adding Conditional Control to Text-to-Image Diffusion Models — ControlNet (Zhang et al., 2023)",
            url: "https://arxiv.org/abs/2302.05543",
            type: "arXiv",
          },
        ],
      },
      {
        day: 14,
        title: "Large Language Models — GPT, Scaling Laws & Emergent Abilities",
        objective:
          "Understand how autoregressive LLMs are trained, why scale produces qualitatively new capabilities, and what the scaling laws predict. Know the jump from GPT-2 to GPT-3 and what changed.",
        targets: [
          "Explain the autoregressive language modeling objective",
          "Describe the key scaling law findings (loss ~ N^α)",
          "Understand in-context learning and why it emerges at scale",
          "Know what prompted the shift from fine-tuning to prompting",
        ],
        papers: [
          {
            title: "Language Models are Unsupervised Multitask Learners — GPT-2 (Radford et al., 2019)",
            url: "https://d4mucfpksywv.cloudfront.net/better-language-models/language_models_are_unsupervised_multitask_learners.pdf",
            type: "OpenAI Blog",
          },
          {
            title: "Language Models are Few-Shot Learners — GPT-3 (Brown et al., 2020)",
            url: "https://arxiv.org/abs/2005.14165",
            type: "arXiv",
          },
          {
            title: "Scaling Laws for Neural Language Models (Kaplan et al., 2020)",
            url: "https://arxiv.org/abs/2001.08361",
            type: "arXiv",
          },
          {
            title: "Emergent Abilities of Large Language Models (Wei et al., 2022)",
            url: "https://arxiv.org/abs/2206.07682",
            type: "arXiv",
          },
        ],
      },
      {
        day: 15,
        title: "Instruction Tuning, FLAN, T5 & Chain-of-Thought",
        objective:
          "Understand how fine-tuning on instruction-formatted data unlocks zero-shot generalization. Know the T5 unified text-to-text framework, FLAN's multi-task instruction tuning, and why chain-of-thought prompting improves reasoning.",
        targets: [
          "Describe the text-to-text transfer framework of T5",
          "Explain FLAN's instruction tuning and why it improves zero-shot performance",
          "Understand chain-of-thought prompting and when it helps vs. hurts",
          "Know the Chinchilla scaling law update and compute-optimal training",
        ],
        papers: [
          {
            title: "Exploring the Limits of Transfer Learning with T5 (Raffel et al., 2019)",
            url: "https://arxiv.org/abs/1910.10683",
            type: "arXiv",
          },
          {
            title: "Finetuned Language Models Are Zero-Shot Learners — FLAN (Wei et al., 2021)",
            url: "https://arxiv.org/abs/2109.01652",
            type: "arXiv",
          },
          {
            title: "Chain-of-Thought Prompting Elicits Reasoning in LLMs (Wei et al., 2022)",
            url: "https://arxiv.org/abs/2201.11903",
            type: "arXiv",
          },
          {
            title: "Training Compute-Optimal Large Language Models — Chinchilla (Hoffmann et al., 2022)",
            url: "https://arxiv.org/abs/2203.15556",
            type: "arXiv",
          },
        ],
      },
      {
        day: 16,
        title: "RLHF — Human Feedback, Reward Modeling & InstructGPT",
        objective:
          "Understand the three-stage RLHF pipeline: supervised fine-tuning, reward model training from human preferences, and RL optimization (PPO). Know why this alignment technique became the industry standard.",
        targets: [
          "Describe the three stages of RLHF: SFT → RM → RL",
          "Explain the Bradley-Terry model for preference learning",
          "Understand why PPO is used in the RL stage and its reward shaping",
          "Identify the known failure modes: reward hacking, overoptimization",
        ],
        papers: [
          {
            title: "Training Language Models to Follow Instructions with Human Feedback — InstructGPT (Ouyang et al., 2022)",
            url: "https://arxiv.org/abs/2203.02155",
            type: "arXiv",
          },
          {
            title: "Learning to Summarize with Human Feedback (Stiennon et al., 2020)",
            url: "https://arxiv.org/abs/2009.01325",
            type: "arXiv",
          },
          {
            title: "Reward Model Ensembles Help Mitigate Overoptimization (Coste et al., 2023)",
            url: "https://arxiv.org/abs/2310.02743",
            type: "arXiv",
          },
        ],
      },
      {
        day: 17,
        title: "Constitutional AI, DPO & Beyond RLHF",
        objective:
          "Understand the critiques of RLHF's complexity and data cost, and the alternatives: Constitutional AI's self-critique loop, DPO's closed-form preference optimization, and RLAIF.",
        targets: [
          "Describe Constitutional AI's critique-revise-RLAIF pipeline",
          "Derive the DPO objective and explain why it eliminates the reward model",
          "Understand RLAIF (AI feedback) as a scalable alternative to human labeling",
          "Know the practical trade-offs: DPO simplicity vs. PPO flexibility",
        ],
        papers: [
          {
            title: "Constitutional AI: Harmlessness from AI Feedback (Bai et al., 2022)",
            url: "https://arxiv.org/abs/2212.08073",
            type: "arXiv",
          },
          {
            title: "Direct Preference Optimization — DPO (Rafailov et al., 2023)",
            url: "https://arxiv.org/abs/2305.18290",
            type: "arXiv",
          },
          {
            title: "RLHF Workflow: From Reward Modeling to Online RLHF (Dong et al., 2024)",
            url: "https://arxiv.org/abs/2405.07863",
            type: "arXiv",
          },
          {
            title: "RLAIF: Scaling Reinforcement Learning from Human Feedback with AI Feedback (Lee et al., 2023)",
            url: "https://arxiv.org/abs/2309.00267",
            type: "arXiv",
          },
        ],
      },
    ],
  },
  {
    id: "phase2b",
    title: "Phase 2B — Reinforcement Learning: MDPs to PPO",
    subtitle: "RL Mechanics for RLHF",
    duration: "8 Days",
    color: "orange",
    days: [
      {
        day: 18,
        title: "RL Foundations — MDPs, Bellman Equations & Value Functions",
        objective:
          "Build the mathematical vocabulary for RL: Markov Decision Processes, the Bellman equation for value functions, and the exploration-exploitation trade-off. Everything in RL flows from these foundations.",
        targets: [
          "Define MDP components: (S, A, P, R, γ) and the Markov property",
          "Derive the Bellman expectation equation for V^π and Q^π",
          "Explain the Bellman optimality equation and why it's recursive",
          "Understand temporal difference learning vs. Monte Carlo returns",
        ],
        papers: [
          {
            title: "Reinforcement Learning: An Introduction — Chapters 1–4 (Sutton & Barto, 2018)",
            url: "http://incompleteideas.net/book/the-book-2nd.html",
            type: "Textbook (Free)",
          },
          {
            title: "Playing Atari with Deep Reinforcement Learning (Mnih et al., 2013)",
            url: "https://arxiv.org/abs/1312.5602",
            type: "arXiv",
          },
          {
            title: "David Silver RL Course — Lecture 2: Markov Decision Processes",
            url: "https://www.davidsilver.uk/teaching/",
            type: "Lecture",
          },
        ],
      },
      {
        day: 19,
        title: "Q-Learning & Deep Q-Networks (DQN)",
        objective:
          "Understand Q-learning as a model-free off-policy algorithm, then see how DQN scales it to high-dimensional state spaces using neural networks, experience replay, and target networks.",
        targets: [
          "Derive the Q-learning update rule from Bellman optimality",
          "Explain experience replay and why it breaks temporal correlations",
          "Understand the target network and its role in stabilizing training",
          "Know Double DQN's fix to overestimation bias",
        ],
        papers: [
          {
            title: "Human-Level Control through Deep Reinforcement Learning — DQN (Mnih et al., 2015)",
            url: "https://www.nature.com/articles/nature14236",
            type: "Nature Paper",
          },
          {
            title: "Deep Reinforcement Learning with Double Q-Learning (van Hasselt et al., 2015)",
            url: "https://arxiv.org/abs/1509.06461",
            type: "arXiv",
          },
          {
            title: "Prioritized Experience Replay (Schaul et al., 2015)",
            url: "https://arxiv.org/abs/1511.05952",
            type: "arXiv",
          },
        ],
      },
      {
        day: 20,
        title: "Policy Gradient Methods & REINFORCE",
        objective:
          "Shift from value-based to policy-based methods. Understand the policy gradient theorem, the REINFORCE algorithm, and the high-variance problem that motivates baselines and actor-critic methods.",
        targets: [
          "Derive the policy gradient theorem",
          "Implement REINFORCE (Monte Carlo policy gradient) conceptually",
          "Explain the variance problem and how baselines/advantage functions help",
          "Understand the entropy bonus for exploration",
        ],
        papers: [
          {
            title: "Policy Gradient Methods for Reinforcement Learning — REINFORCE (Williams, 1992)",
            url: "https://link.springer.com/article/10.1007/BF00992696",
            type: "Journal Paper",
          },
          {
            title: "Asynchronous Methods for Deep Reinforcement Learning — A3C (Mnih et al., 2016)",
            url: "https://arxiv.org/abs/1602.01783",
            type: "arXiv",
          },
          {
            title: "RL Course by David Silver — Lecture 7: Policy Gradient",
            url: "https://www.davidsilver.uk/teaching/",
            type: "Lecture",
          },
        ],
      },
      {
        day: 21,
        title: "Actor-Critic Methods — A2C, SAC & Advantage Estimation",
        objective:
          "Understand actor-critic as the combination of policy gradient (actor) and value estimation (critic). Learn GAE for variance-reduced advantage estimates, and SAC for continuous action spaces.",
        targets: [
          "Describe the actor-critic architecture and the roles of each component",
          "Derive Generalized Advantage Estimation (GAE) and the λ trade-off",
          "Understand Soft Actor-Critic's entropy maximization objective",
          "Explain why SAC is more stable than vanilla policy gradient in continuous spaces",
        ],
        papers: [
          {
            title: "High-Dimensional Continuous Control Using Generalized Advantage Estimation — GAE (Schulman et al., 2015)",
            url: "https://arxiv.org/abs/1506.02438",
            type: "arXiv",
          },
          {
            title: "Soft Actor-Critic: Off-Policy Maximum Entropy Deep RL — SAC (Haarnoja et al., 2018)",
            url: "https://arxiv.org/abs/1801.01290",
            type: "arXiv",
          },
          {
            title: "Reinforcement Learning: An Introduction — Chapter 13 (Sutton & Barto)",
            url: "http://incompleteideas.net/book/the-book-2nd.html",
            type: "Textbook (Free)",
          },
        ],
      },
      {
        day: 22,
        title: "TRPO & Proximal Policy Optimization (PPO)",
        objective:
          "Understand why unconstrained policy gradient steps can destroy policies catastrophically, how TRPO uses a trust region constraint, and how PPO approximates TRPO's guarantee with a clipped objective — becoming the standard in RLHF.",
        targets: [
          "Explain the policy improvement monotonicity guarantee and why large steps break it",
          "Describe TRPO's KL constraint and why it's expensive to compute",
          "Derive the PPO clipped surrogate objective",
          "Understand PPO's value function loss and entropy bonus",
        ],
        papers: [
          {
            title: "Trust Region Policy Optimization — TRPO (Schulman et al., 2015)",
            url: "https://arxiv.org/abs/1502.05477",
            type: "arXiv",
          },
          {
            title: "Proximal Policy Optimization Algorithms — PPO (Schulman et al., 2017)",
            url: "https://arxiv.org/abs/1707.06347",
            type: "arXiv",
          },
          {
            title: "OpenAI Blog: Proximal Policy Optimization",
            url: "https://openai.com/blog/openai-baselines-ppo/",
            type: "Blog",
          },
        ],
      },
      {
        day: 23,
        title: "Model-Based RL, World Models & Rainbow",
        objective:
          "Understand model-based RL as an alternative that learns the environment dynamics, and Rainbow DQN as the synthesis of all major DQN improvements. Know when model-based RL wins and where it fails.",
        targets: [
          "Contrast model-free vs. model-based RL and their sample efficiency trade-offs",
          "Explain how Dyna integrates planning with model-free updates",
          "Describe Rainbow's six DQN improvements and their individual contributions",
          "Understand World Models and how latent dynamics enable planning",
        ],
        papers: [
          {
            title: "Rainbow: Combining Improvements in Deep Reinforcement Learning (Hessel et al., 2017)",
            url: "https://arxiv.org/abs/1710.02298",
            type: "arXiv",
          },
          {
            title: "World Models (Ha & Schmidhuber, 2018)",
            url: "https://arxiv.org/abs/1803.10122",
            type: "arXiv",
          },
          {
            title: "Model-Based Reinforcement Learning: A Survey (Moerland et al., 2020)",
            url: "https://arxiv.org/abs/2006.16712",
            type: "arXiv",
          },
        ],
      },
      {
        day: 24,
        title: "RL for Language Models — Reward Shaping & KL Penalties",
        objective:
          "Bridge RL theory to LLM fine-tuning. Understand how the RLHF RL stage formulates the LLM as a policy, the action/state spaces, KL divergence penalty against the reference model, and the reward hacking problem.",
        targets: [
          "Map LLM generation to an MDP: state = context, action = token",
          "Understand the KL penalty against the supervised reference model",
          "Explain reward hacking in language models with examples",
          "Describe how reward normalization and clipping stabilize training",
        ],
        papers: [
          {
            title: "Fine-Tuning Language Models from Human Preferences (Ziegler et al., 2019)",
            url: "https://arxiv.org/abs/1909.08593",
            type: "arXiv",
          },
          {
            title: "Secrets of RLHF in Large Language Models (Zheng et al., 2023)",
            url: "https://arxiv.org/abs/2307.04964",
            type: "arXiv",
          },
          {
            title: "Scaling Laws for Reward Model Overoptimization (Gao et al., 2022)",
            url: "https://arxiv.org/abs/2210.10760",
            type: "arXiv",
          },
        ],
      },
      {
        day: 25,
        title: "RLHF Deep Dive — Full Pipeline & Open Frameworks",
        objective:
          "Synthesize all RLHF knowledge into a coherent end-to-end picture. Study open-source implementations, understand the compute costs at each stage, and know the current best practices and open research questions.",
        targets: [
          "Trace a full RLHF run from data collection to deployed model",
          "Understand OpenRLHF's distributed training architecture",
          "Compare RLHF vs. DPO vs. RLAIF in practical settings",
          "Identify 3 open research problems in RLHF alignment",
        ],
        papers: [
          {
            title: "OpenRLHF: An Easy-to-Use, Scalable, and High-Performance RLHF Framework (Hu et al., 2024)",
            url: "https://arxiv.org/abs/2405.11143",
            type: "arXiv",
          },
          {
            title: "RLHF Workflow: From Reward Modeling to Online RLHF (Dong et al., 2024)",
            url: "https://arxiv.org/abs/2405.07863",
            type: "arXiv",
          },
          {
            title: "A General Language Assistant as a Laboratory for Alignment (Askell et al., 2021)",
            url: "https://arxiv.org/abs/2112.00861",
            type: "arXiv",
          },
        ],
      },
    ],
  },
  {
    id: "phase3",
    title: "Phase 3 — Federated Learning → Federated Clustering → Thesis",
    subtitle: "Research Frontier",
    duration: "14 Days",
    color: "green",
    days: [
      {
        day: 26,
        title: "Federated Learning Foundations — FedAvg & the FL Problem",
        objective:
          "Understand why federated learning exists: privacy-preserving training without centralizing data. Master FedAvg as the canonical algorithm and its assumptions about IID data, communication rounds, and aggregation.",
        targets: [
          "Explain the FL problem setup: clients, server, local data, non-IID challenge",
          "Derive the FedAvg aggregation rule (weighted average of local updates)",
          "Understand communication rounds vs. local epochs trade-off",
          "Know the four main FL challenges: communication, heterogeneity, privacy, security",
        ],
        papers: [
          {
            title: "Communication-Efficient Learning of Deep Networks from Decentralized Data — FedAvg (McMahan et al., 2017)",
            url: "https://arxiv.org/abs/1602.05629",
            type: "arXiv",
          },
          {
            title: "Advances and Open Problems in Federated Learning (Kairouz et al., 2021)",
            url: "https://arxiv.org/abs/1912.04977",
            type: "arXiv",
          },
          {
            title: "Federated Machine Learning: Concept and Applications (Yang et al., 2019)",
            url: "https://arxiv.org/abs/1902.04885",
            type: "arXiv",
          },
        ],
      },
      {
        day: 27,
        title: "FL Communication Efficiency — Compression & SCAFFOLD",
        objective:
          "Understand the communication bottleneck in FL and the techniques that address it: gradient compression, quantization, sparsification, and SCAFFOLD's correction of client drift.",
        targets: [
          "Explain client drift and why FedAvg diverges under non-IID data",
          "Describe SCAFFOLD's control variates and how they correct drift",
          "Understand gradient compression: top-k sparsification and quantization",
          "Know the convergence bounds and their communication-computation trade-offs",
        ],
        papers: [
          {
            title: "SCAFFOLD: Stochastic Controlled Averaging for FL (Karimireddy et al., 2020)",
            url: "https://arxiv.org/abs/1910.06378",
            type: "arXiv",
          },
          {
            title: "Federated Learning: Strategies for Improving Communication Efficiency (Konecny et al., 2016)",
            url: "https://arxiv.org/abs/1610.05492",
            type: "arXiv",
          },
          {
            title: "Deep Gradient Compression (Lin et al., 2017)",
            url: "https://arxiv.org/abs/1712.01887",
            type: "arXiv",
          },
        ],
      },
      {
        day: 28,
        title: "Privacy in FL — Differential Privacy & Secure Aggregation",
        objective:
          "Understand the privacy threats in federated learning (gradient inversion, membership inference) and the cryptographic and statistical defenses: differential privacy, secure aggregation, and their privacy-utility trade-offs.",
        targets: [
          "Define differential privacy (ε, δ) and the Gaussian mechanism",
          "Explain how DP-SGD clips and noises gradients",
          "Understand secure aggregation using secret sharing",
          "Know gradient inversion attacks (DLG, iDLG) and why they motivate defenses",
        ],
        papers: [
          {
            title: "Deep Learning with Differential Privacy (Abadi et al., 2016)",
            url: "https://arxiv.org/abs/1607.00133",
            type: "arXiv",
          },
          {
            title: "Practical Secure Aggregation for Privacy-Preserving ML (Bonawitz et al., 2017)",
            url: "https://arxiv.org/abs/1611.04482",
            type: "arXiv",
          },
          {
            title: "Deep Leakage from Gradients — DLG Attack (Zhu et al., 2019)",
            url: "https://arxiv.org/abs/1906.08935",
            type: "arXiv",
          },
        ],
      },
      {
        day: 29,
        title: "Statistical Heterogeneity in FL — FedProx, MOON & FedNova",
        objective:
          "Master the non-IID data problem: why FedAvg fails when client data distributions diverge, and the algorithms that add proximal regularization, contrastive objectives, or normalized gradient averaging.",
        targets: [
          "Quantify non-IID impact on FedAvg convergence",
          "Explain FedProx's proximal term and its effect on local divergence",
          "Understand MOON's contrastive loss aligning local and global representations",
          "Describe FedNova's normalized averaging and objective inconsistency fix",
        ],
        papers: [
          {
            title: "Federated Optimization in Heterogeneous Networks — FedProx (Li et al., 2020)",
            url: "https://arxiv.org/abs/1812.06127",
            type: "arXiv",
          },
          {
            title: "Model-Contrastive Federated Learning — MOON (Li et al., 2021)",
            url: "https://arxiv.org/abs/2103.16257",
            type: "arXiv",
          },
          {
            title: "Tackling the Objective Inconsistency Problem in Heterogeneous Federated Optimization — FedNova (Wang et al., 2020)",
            url: "https://arxiv.org/abs/2007.06768",
            type: "arXiv",
          },
        ],
      },
      {
        day: 30,
        title: "Personalized Federated Learning — pFedMe, FedPer & Per-FedAvg",
        objective:
          "Understand why a single global model is insufficient for heterogeneous clients, and the personalization strategies: local fine-tuning, layer-wise splitting, meta-learning, and mixture-of-models.",
        targets: [
          "Define personalized FL and contrast with standard FL",
          "Explain pFedMe's bilevel optimization for personalized objectives",
          "Describe FedPer's body-head split: shared representation, personal classifier",
          "Understand Per-FedAvg's MAML-based approach to fast local adaptation",
        ],
        papers: [
          {
            title: "Personalized Federated Learning with Moreau Envelopes — pFedMe (Dinh et al., 2020)",
            url: "https://arxiv.org/abs/2006.08848",
            type: "arXiv",
          },
          {
            title: "Federated Learning with Personalization Layers — FedPer (Arivazhagan et al., 2019)",
            url: "https://arxiv.org/abs/1912.00818",
            type: "arXiv",
          },
          {
            title: "Personalized Federated Learning with Theoretical Guarantees — Per-FedAvg (Fallah et al., 2020)",
            url: "https://arxiv.org/abs/2002.07948",
            type: "arXiv",
          },
          {
            title: "Survey of Personalization Techniques for Federated Learning (Yu et al., 2020)",
            url: "https://arxiv.org/abs/2003.08673",
            type: "arXiv",
          },
        ],
      },
      {
        day: 31,
        title: "Clustering Algorithms — K-Means, DBSCAN & Spectral Clustering",
        objective:
          "Build the classical clustering foundation needed for federated clustering. Understand the algorithmic assumptions, convergence properties, and failure modes of the main clustering families.",
        targets: [
          "Derive the K-Means EM update and understand its Voronoi interpretation",
          "Explain DBSCAN's density-based approach and its noise handling",
          "Understand spectral clustering's graph Laplacian and why it handles non-convex clusters",
          "Know the clustering validity indices (silhouette, Davies-Bouldin) used for evaluation",
        ],
        papers: [
          {
            title: "A Tutorial on Spectral Clustering (von Luxburg, 2007)",
            url: "https://arxiv.org/abs/0711.0189",
            type: "arXiv",
          },
          {
            title: "A Density-Based Algorithm for Discovering Clusters — DBSCAN (Ester et al., 1996)",
            url: "https://www.aaai.org/Papers/KDD/1996/KDD96-037.pdf",
            type: "Conference Paper",
          },
          {
            title: "Deep Learning Book — Chapter 5: ML Basics (Clustering Section) (Goodfellow et al.)",
            url: "https://www.deeplearningbook.org/contents/ml.html",
            type: "Textbook",
          },
        ],
      },
      {
        day: 32,
        title: "Federated Clustering Foundations — CFL & IFCA",
        objective:
          "Understand how clustering is applied in the federated setting: grouping clients by data distribution similarity without exposing raw data. Master Clustered Federated Learning (CFL) and IFCA as the seminal algorithms.",
        targets: [
          "Explain why clustering clients addresses the non-IID problem structurally",
          "Describe CFL's bi-partitioning based on gradient inner products",
          "Understand IFCA's alternating optimization: cluster assignment + local training",
          "Know the identifiability conditions under which IFCA converges correctly",
        ],
        papers: [
          {
            title: "Clustered Federated Learning: Model-Agnostic Distributed Multi-Task Optimization (Sattler et al., 2020)",
            url: "https://arxiv.org/abs/1910.01991",
            type: "arXiv",
          },
          {
            title: "An Efficient Framework for Clustered Federated Learning — IFCA (Ghosh et al., 2020)",
            url: "https://arxiv.org/abs/2006.04088",
            type: "arXiv",
          },
          {
            title: "Federated Multi-Task Learning (Smith et al., 2017)",
            url: "https://arxiv.org/abs/1705.10467",
            type: "arXiv",
          },
        ],
      },
      {
        day: 33,
        title: "Advanced Federated Clustering — FeSEM, FedGroup & HypCluster",
        objective:
          "Study the next generation of federated clustering: EM-based mixture models, gradient-similarity grouping, and hyperspherical clustering. Understand their convergence guarantees and scalability.",
        targets: [
          "Describe FeSEM's federated EM updates for mixture model clustering",
          "Explain FedGroup's hierarchical clustering by gradient divergence",
          "Understand HypCluster's geometry-aware clustering on hyperspherical embeddings",
          "Identify the communication overhead of each method",
        ],
        papers: [
          {
            title: "Multi-Center Federated Learning — FeSEM (Xie et al., 2021)",
            url: "https://arxiv.org/abs/2005.01026",
            type: "arXiv",
          },
          {
            title: "FedGroup: Efficient Clustered Federated Learning via Decomposed Data-Driven Measure (Duan et al., 2021)",
            url: "https://arxiv.org/abs/2010.06870",
            type: "arXiv",
          },
          {
            title: "Personalized Federated Learning with First Order Model Optimization (Zhang et al., 2021)",
            url: "https://arxiv.org/abs/2012.08565",
            type: "arXiv",
          },
        ],
      },
      {
        day: 34,
        title: "Federated Clustering with Privacy & Byzantine Robustness",
        objective:
          "Understand the intersection of clustering with privacy (DP cluster assignments) and security (Byzantine-robust aggregation). Know how clustering interacts with adversarial clients.",
        targets: [
          "Explain differentially private K-Means and its sensitivity analysis",
          "Describe how Byzantine clients can corrupt cluster assignments",
          "Understand robust aggregation rules: Krum, coordinate-wise median, FLTrust",
          "Know how clustering itself can improve Byzantine robustness",
        ],
        papers: [
          {
            title: "Machine Learning with Adversaries: Byzantine Tolerant Gradient Descent — Krum (Blanchard et al., 2017)",
            url: "https://arxiv.org/abs/1703.02757",
            type: "arXiv",
          },
          {
            title: "Byzantine-Robust Distributed Learning: Towards Optimal Statistical Rates (Yin et al., 2018)",
            url: "https://arxiv.org/abs/1803.05880",
            type: "arXiv",
          },
          {
            title: "FLTrust: Byzantine-robust Federated Learning via Trust Bootstrapping (Cao et al., 2020)",
            url: "https://arxiv.org/abs/2012.13995",
            type: "arXiv",
          },
        ],
      },
      {
        day: 35,
        title: "Federated Learning for NLP & LLMs",
        objective:
          "Understand how federated learning is applied to large language models: the communication and compute challenges of federating billion-parameter models, and techniques like FedPETuning and split learning.",
        targets: [
          "Identify why standard FL is expensive for LLMs and what tricks reduce cost",
          "Understand federated fine-tuning via adapters (LoRA) and prompt tuning",
          "Describe FedNLP's benchmark and the heterogeneous NLP task settings",
          "Know the privacy risks specific to federated LLM training",
        ],
        papers: [
          {
            title: "FedNLP: Benchmarking Federated Learning Methods for NLP Tasks (Lin et al., 2021)",
            url: "https://arxiv.org/abs/2104.08815",
            type: "arXiv",
          },
          {
            title: "Federated Learning of Large Language Models with Parameter-Efficient Prompt Tuning (Kuang et al., 2023)",
            url: "https://arxiv.org/abs/2310.03744",
            type: "arXiv",
          },
          {
            title: "Towards Building the Federated GPT: Federated Instruction Tuning of LLMs (Zhang et al., 2023)",
            url: "https://arxiv.org/abs/2305.05644",
            type: "arXiv",
          },
        ],
      },
      {
        day: 36,
        title: "Federated Clustering + LLMs — The Research Frontier",
        objective:
          "Survey the open frontier: applying federated clustering to LLM adaptation, personalized federated LLMs via cluster-specific LoRA, and the gap between theoretical FL and practical LLM deployment.",
        targets: [
          "Identify the gap between current federated clustering methods and LLM-scale needs",
          "Understand cluster-conditioned federated LLM fine-tuning approaches",
          "Survey the 3 most cited papers combining federated clustering and language models",
          "Begin formulating a potential thesis contribution in this space",
        ],
        papers: [
          {
            title: "FedCluster: Exploiting High-Dimensional Conceptual Subspaces via Clustering-based FL (Briggs et al., 2020)",
            url: "https://arxiv.org/abs/2002.11512",
            type: "arXiv",
          },
          {
            title: "Heterogeneous Federated Learning via Grouped Sequential-to-Parallel Training (Diao et al., 2021)",
            url: "https://arxiv.org/abs/2111.11999",
            type: "arXiv",
          },
          {
            title: "Federated Learning Meets Natural Language Processing: A Survey (Yin et al., 2021)",
            url: "https://arxiv.org/abs/2107.12603",
            type: "arXiv",
          },
        ],
      },
      {
        day: 37,
        title: "Thesis Framing — Problem Statement & Research Question",
        objective:
          "Translate your research reading into a crisp, defensible thesis problem statement. Define the gap, scope your contribution, and write your research question in a falsifiable form.",
        targets: [
          "Write a one-paragraph problem statement referencing specific prior work",
          "Define your proposed method at a high level (2–3 sentences)",
          "State your research question in falsifiable, measurable terms",
          "Identify your evaluation datasets, baselines, and metrics",
        ],
        papers: [
          {
            title: "How to Write a Good Systems Paper (Levin & Redell) — on writing tight problem statements",
            url: "https://www.usenix.org/legacy/publications/library/proceedings/dsl97/full_papers/good_paper.pdf",
            type: "Guide",
          },
          {
            title: "Writing a Research Paper (MIT OpenCourseWare)",
            url: "https://ocw.mit.edu/courses/21w-031-writing-and-reading-the-essay-spring-2023/",
            type: "Course",
          },
          {
            title: "How to Read a Paper (Keshav, 2007) — for efficient related work review",
            url: "https://web.stanford.edu/class/ee384m/Handouts/HowtoReadPaper.pdf",
            type: "Guide",
          },
        ],
      },
      {
        day: 38,
        title: "Related Work Synthesis — Survey Writing & Gap Analysis",
        objective:
          "Structure your related work section. Group prior work into coherent themes, identify what each cluster of papers does NOT solve, and position your thesis contribution relative to that gap.",
        targets: [
          "Organize 15–20 papers from your reading into 3–4 thematic clusters",
          "For each cluster, write 2 sentences: what they achieve and what they leave unsolved",
          "Identify the specific gap your thesis addresses (1 clear sentence)",
          "Draft a 2-page related work outline",
        ],
        papers: [
          {
            title: "Advances and Open Problems in Federated Learning (Kairouz et al.) — use as related work model",
            url: "https://arxiv.org/abs/1912.04977",
            type: "arXiv",
          },
          {
            title: "A Survey on Federated Learning Systems (Li et al., 2021)",
            url: "https://arxiv.org/abs/2104.07145",
            type: "arXiv",
          },
          {
            title: "Survey on Large Language Models (Zhao et al., 2023)",
            url: "https://arxiv.org/abs/2303.18223",
            type: "arXiv",
          },
        ],
      },
      {
        day: 39,
        title: "Research Gaps, Contribution Mapping & Thesis Roadmap",
        objective:
          "Finalize your thesis research plan: map your contribution to the gap, sketch the experimental methodology, and write a 1-page thesis abstract. This is your launchpad for actual research.",
        targets: [
          "Complete a contribution map: gap → proposed method → expected outcome",
          "Sketch the experimental plan: datasets, baselines, ablations, metrics",
          "Write a 250-word thesis abstract (background, gap, method, expected results)",
          "Identify 3 open questions that remain after your proposed contribution",
        ],
        papers: [
          {
            title: "A Survey on Clustered Federated Learning (Ghosh et al.) — synthesize for thesis gaps",
            url: "https://arxiv.org/abs/2006.04088",
            type: "arXiv",
          },
          {
            title: "Federated Learning: Opportunities and Challenges (Niknam et al., 2020)",
            url: "https://arxiv.org/abs/2101.05428",
            type: "arXiv",
          },
          {
            title: "The PhD Grind: A PhD Student Memoir (Philip Guo) — perspective on thesis work",
            url: "https://www.pgbovine.net/PhD-memoir.htm",
            type: "Book (Free)",
          },
        ],
      },
    ],
  },
];

export const totalDays = phases.reduce((sum, p) => sum + p.days.length, 0);
