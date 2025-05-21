import Link from "next/link";
import {
  Terminal as MagicTerminal,
  TypingAnimation,
  AnimatedSpan,
} from "@/components/magicui/terminal";

export function Terminal() {
  return (
    <MagicTerminal className="h-[308px]">
      <TypingAnimation delay={1000}>&gt; tomfullylove init --build</TypingAnimation>
      <AnimatedSpan delay={3000} className="text-green-500">
        <span>✔ Curled hair</span>
      </AnimatedSpan>
      <AnimatedSpan delay={4000} className="text-blue-500">
        <span>ℹ Loading skills...</span>
      </AnimatedSpan>
      <AnimatedSpan delay={5000} className="text-muted-foreground pl-2">
        <span>- Languages: Typescript, Python + Welsh 🏴󠁧󠁢󠁷󠁬󠁳󠁿</span>
      </AnimatedSpan>
      <AnimatedSpan delay={5500} className="text-muted-foreground pl-2">
        <span>- Frontend: React, Redux + React Native</span>
      </AnimatedSpan>
      <AnimatedSpan delay={6000} className="text-muted-foreground pl-2">
        <span>- Backend: Node.js, Django, GraphQL + Flask</span>
      </AnimatedSpan>
      <AnimatedSpan delay={6500} className="text-muted-foreground pl-2">
        <span>- Infra: AWS, Terraform + Serverless Framework</span>
      </AnimatedSpan>
      <AnimatedSpan delay={7500} className="text-green-500">
        <span>
          ✔ Created{" "}
          <Link
            href="/tom-fullylove-resume.pdf"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            resume.pdf
          </Link>
        </span>
      </AnimatedSpan>
      <AnimatedSpan delay={8500} className="text-green-500">
        <span>
          ✔ Linked to third parties:{" "}
          <Link
            href="https://github.com/tomfullylove"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com
          </Link>{" "}
          +{" "}
          <Link
            href="https://www.linkedin.com/in/tom-fullylove-6a382a189/"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com
          </Link>
        </span>
      </AnimatedSpan>
      <TypingAnimation delay={9500} className="text-muted-foreground">
        Done! Compiled in 6.72s
      </TypingAnimation>
    </MagicTerminal>
  );
}
