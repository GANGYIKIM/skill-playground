# skill-playground

Git 관련 Claude Code 스킬을 작성하고 테스트하기 위한 실험용 레포입니다.

## 목적

- Git 작업(커밋, PR 등)을 돕는 스킬을 만들고 다듬는다.
- 실제 Git 레포에서 스킬을 돌려 보며 동작을 확인한다.

이 레포의 커밋, 브랜치, PR은 스킬 테스트 과정에서 만들어진 것일 수 있습니다.

## 테스트 대상 스킬

| 스킬 | 설명 |
| --- | --- |
| `git-kit:commit-writer` | 변경사항을 주제별 커밋으로 나누고 Gitmoji + Conventional Commits 형식의 메시지로 커밋 |
| `git-kit:pr-writer` | 브랜치의 커밋을 읽어 PR 제목과 본문을 작성하고 PR을 생성하거나 갱신 |

## 사용 방법

Claude Code에서 이 레포를 열고 스킬을 호출합니다.

```
커밋해줘
PR 만들어줘
```

## Usage

greet("Kim")
