"use client";
import { useCallback, useMemo, useState } from "react";
import styles from "./style.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { FaQuestionCircle } from "react-icons/fa";
import Tippy from "@tippyjs/react";
import usePwa from "use-pwa";
import { MdDownloadForOffline } from "react-icons/md";

const MySwal = withReactContent(Swal);

type FieldValues = {
  text: string;
};

export default function Page(): JSX.Element {
  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      text: "",
    },
  });
  const onSubmit = useCallback<SubmitHandler<FieldValues>>(async () => {
    reset();

    await MySwal.fire({
      text: "あなたは気持ちがすっきりしました",
    });
  }, [reset]);
  const content = useMemo(
    () => (
      <p>
        穴では、誹謗中傷や個人を特定するような発言を一切禁止していません。
        <br />
        また、特定の人物に対する悪口や罵倒、人格否定など一切禁止していません。
        <br />
        穴に叫ばれた内容は、外部のサーバーなどに保存されることはなく、あらゆる場所において使用されることもありません。
        <br />
        穴以外の場所では、常に冷静な判断で、他人に迷惑をかけるような発言は控えましょう。
      </p>
    ),
    []
  );
  const {
    appinstalled,
    canInstallprompt,
    enabledPwa,
    isPwa,
    showInstallPrompt,
  } = usePwa();

  return (
    <div className={styles.wrapper}>
      <div className={styles.topBlock}>
        <div className={styles.hole} />
      </div>
      <div className={styles.bottomBlock}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.formInner}>
            <textarea
              {...register("text", { required: true })}
              className={styles.textarea}
              placeholder="王様の耳はロバの耳"
            />
            <div className={styles.formFooter}>
              <button className={styles.button} type="submit">
                叫ぶ
              </button>
              <div className={styles.iconButtonsWrapper}>
                <Tippy content={content} trigger="click">
                  <button>
                    <FaQuestionCircle color="#333" size={24} />
                  </button>
                </Tippy>
                {!appinstalled && canInstallprompt && enabledPwa && !isPwa ? (
                  <button onClick={showInstallPrompt}>
                    <MdDownloadForOffline color="#333" size={28} />
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
