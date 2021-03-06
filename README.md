## talking-heads-web
![](./screenshot/intro-demo.gif)

## Introduction
本專案基於 `Few-Shot Adversarial Learning of Realistic Neural Talking Head Models` 進行實作。此模型分為兩個階段，第一個是meta-learning stage，另一個是fine-tuning stage。借助Few-shot Learning的概念，我們訓練一個Meta Learner，可以在相對極短的時間內針對少量樣本的臉部五官和圖片風格去做finetune，達成讓畫像動起來的驚人效果。通常在meta-learning stage訓練完後就可以生成圖，但會有不可識別身份的缺陷，再經過fine-tuning stage就可以改善表現不好的部分。

![](https://i.imgur.com/zz1xrMU.png)

### self-Attension GAN
AdaIN目前在實務上效果真的不錯(style transfer)，而且通常都不只加一層。大範圍的特徵，如背景之類的，或是同樣背景但被切成很多塊，就可以用self-attention module.

![](https://i.imgur.com/44E3344.png)


## Reference
[讓照片動起來](https://medium.com/ai-academy-taiwan/%E8%AE%93%E7%85%A7%E7%89%87%E5%8B%95%E8%B5%B7%E4%BE%86-69d055ac37ff)

[Paper](https://arxiv.org/pdf/1905.08233.pdf
)