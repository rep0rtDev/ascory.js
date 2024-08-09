export class MissingFieldError extends Error {
    constructor(messageEn, messageRu) {
        super(messageEn);
        this.name = 'MissingFieldError';
        this.messageEn = messageEn;
        this.messageRu = messageRu;
    }

    getMessage(locale = 'en') {
        return locale === 'ru' ? this.messageRu : this.messageEn;
    }
}